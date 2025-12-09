import { BookOpen, Users, Award, Clock } from "lucide-react"

const features = [
  {
    name: "Expert-Led Courses",
    description: "Learn from industry professionals with years of real-world experience in their fields.",
    icon: BookOpen,
  },
  {
    name: "Interactive Learning",
    description: "Engage with hands-on projects, quizzes, and peer discussions to reinforce your knowledge.",
    icon: Users,
  },
  {
    name: "Recognized Certificates",
    description: "Earn certificates upon completion to showcase your skills to employers and clients.",
    icon: Award,
  },
  {
    name: "Learn at Your Pace",
    description: "Access course materials anytime, anywhere. Study on your schedule with lifetime access.",
    icon: Clock,
  },
]

export function Features() {
  return (
    <section className="bg-muted/50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why Choose Us</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Our platform is designed to help you learn effectively and achieve your goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="group rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{feature.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
