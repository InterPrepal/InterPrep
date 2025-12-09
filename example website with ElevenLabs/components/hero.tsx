import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Start Learning Today</p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Transform Your Future Through Learning
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Access world-class courses from expert instructors. Build new skills, advance your career, and achieve your
          goals with our comprehensive learning platform.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 text-base">
            Browse Courses
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2 text-base bg-transparent">
            <Play className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">10,000+</span>
            <span>Students</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">200+</span>
            <span>Courses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">50+</span>
            <span>Expert Instructors</span>
          </div>
        </div>
      </div>
    </section>
  )
}
