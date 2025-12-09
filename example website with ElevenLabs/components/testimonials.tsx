import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "EduLearn completely changed my career trajectory. The courses are well-structured, and the instructors are incredibly knowledgeable.",
    author: "Alex Thompson",
    role: "Software Developer",
    avatar: "/professional-man-portrait.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I've tried many online learning platforms, but EduLearn stands out for its quality content and supportive community.",
    author: "Maria Garcia",
    role: "Marketing Manager",
    avatar: "/professional-woman-portrait.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The flexibility to learn at my own pace while working full-time has been invaluable. Highly recommend to anyone looking to upskill.",
    author: "James Wilson",
    role: "Product Designer",
    avatar: "/creative-professional-portrait.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by thousands of learners
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{testimonial.content}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
