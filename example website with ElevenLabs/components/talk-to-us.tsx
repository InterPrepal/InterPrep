"use client";

import { useState, useCallback } from "react";
import { useConversation } from "@elevenlabs/react";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff } from "lucide-react";

interface TranscriptMessage {
  role: "user" | "agent";
  message: string;
  timestamp: Date;
}

const MODE_CONFIG = {
  normal: {
    label: "Normal chat",
    description: "Ask anything, free conversation.",
  },
  interview: {
    label: "Interview mode",
    description:
      "System asks you questions, grades your answers, and shows fixes.",
  },
} as const;

type ConversationMode = keyof typeof MODE_CONFIG;
const DEFAULT_AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "your-agent-id";
const INTERVIEW_AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_INTERVIEW_AGENT_ID || DEFAULT_AGENT_ID;

export function TalkToUs() {
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [mode, setMode] = useState<ConversationMode>("normal");
  const modeEntries = Object.entries(MODE_CONFIG) as Array<
    [ConversationMode, (typeof MODE_CONFIG)[ConversationMode]]
  >;

  const conversation = useConversation({
    onConnect: () => {
      setTranscript([]);
      setIsSessionActive(true);
    },
    onDisconnect: () => {
      setIsSessionActive(false);
    },
    onMessage: (message) => {
      console.log("[v0] onMessage received:", JSON.stringify(message, null, 2));

      if (
        message.source === "user" &&
        message.role === "user" &&
        message.message
      ) {
        console.log("[v0] User transcript detected:", message.message);
        setTranscript((prev) => [
          ...prev,
          { role: "user", message: message.message, timestamp: new Date() },
        ]);
      } else if (message.source === "ai" && message.message) {
        console.log("[v0] Agent response detected:", message.message);
        setTranscript((prev) => [
          ...prev,
          { role: "agent", message: message.message, timestamp: new Date() },
        ]);
      }
    },
    onError: (error) => {
      console.error("[v0] Conversation error:", error);
    },
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const agentId =
        mode === "interview" ? INTERVIEW_AGENT_ID : DEFAULT_AGENT_ID;

      await conversation.startSession({
        agentId,
        connectionType: "webrtc",
        dynamicVariables: {
          conversation_mode: mode,
        },
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation, mode]);

  const endConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Talk to Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Start a voice conversation with our AI assistant.
            Click the button below and speak naturally.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex rounded-full border border-border bg-background p-1">
              {modeEntries.map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMode(key)}
                  disabled={isSessionActive}
                  aria-pressed={mode === key}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    mode === key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  } ${isSessionActive ? "cursor-not-allowed opacity-70" : ""}`}
                >
                  {config.label}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {MODE_CONFIG[mode].description}
            </p>
            {isSessionActive && (
              <p className="text-xs text-muted-foreground">
                End the current conversation to switch modes.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Connection Status */}
          <div className="flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${
                conversation.status === "connected"
                  ? "bg-green-500"
                  : "bg-muted-foreground"
              }`}
            />
            <span className="text-sm text-muted-foreground capitalize">
              {conversation.status}
            </span>
            {conversation.isSpeaking && (
              <span className="text-sm text-primary ml-2">
                Agent is speaking...
              </span>
            )}
          </div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            {!isSessionActive ? (
              <Button onClick={startConversation} size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Talk to Us
              </Button>
            ) : (
              <Button
                onClick={endConversation}
                variant="destructive"
                size="lg"
                className="gap-2"
              >
                <PhoneOff className="h-5 w-5" />
                End Conversation
              </Button>
            )}
          </div>

          {/* Transcript Display */}
          {transcript.length > 0 && (
            <div className="w-full mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Conversation Transcript
              </h3>
              <div className="bg-background border border-border rounded-lg p-4 max-h-96 overflow-y-auto space-y-4">
                {transcript.map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      item.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        item.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-xs font-medium mb-1 opacity-70">
                        {item.role === "user" ? "You" : "Assistant"}
                      </p>
                      <p className="text-sm">{item.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
