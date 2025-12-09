import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript from scratch and build your first website.",
    image: "/web-development-code-laptop.jpg",
    category: "Development",
    rating: 4.9,
    students: 2340,
    duration: "12 hours",
    instructor: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning fundamentals.",
    image: "/data-science-charts-graphs.jpg",
    category: "Data Science",
    rating: 4.8,
    students: 1850,
    duration: "18 hours",
    instructor: "Michael Chen",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Comprehensive guide to SEO, social media, and content marketing strategies.",
    image: "/digital-marketing-social-media.png",
    category: "Marketing",
    rating: 4.7,
    students: 3120,
    duration: "10 hours",
    instructor: "Emily Roberts",
  },
]

export function Courses() {
  return (
    <section id="courses" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Popular Courses</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Start learning today</h2>
          </div>
          <Button variant="outline">View All Courses</Button>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {course.category}
                </Badge>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  by <span className="font-medium text-foreground">{course.instructor}</span>
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      {course.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
