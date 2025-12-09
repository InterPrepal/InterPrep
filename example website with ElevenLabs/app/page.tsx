import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Courses } from "@/components/courses"
import { Testimonials } from "@/components/testimonials"
import { TalkToUs } from "@/components/talk-to-us"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TalkToUs />
        <Features />
        <Courses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
