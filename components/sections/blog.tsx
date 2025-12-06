"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Building Performant React Applications",
    excerpt: "Learn the best practices and techniques for optimizing React applications, including code splitting, lazy loading, and memoization strategies.",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    category: "React",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    title: "Getting Started with Next.js 14",
    excerpt: "A comprehensive guide to the latest features in Next.js 14, including Server Actions, improved caching, and the App Router enhancements.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "Next.js",
    tags: ["Next.js", "Web Development", "Tutorial"],
  },
  {
    title: "Mastering CSS Animations",
    excerpt: "Deep dive into CSS animations and transitions. Learn how to create smooth, performant animations that enhance user experience.",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Animation", "Frontend"],
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Improve your TypeScript code with these essential patterns, tips, and tricks for writing type-safe and maintainable applications.",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "JavaScript"],
  },
  {
    title: "State Management in Modern React",
    excerpt: "Comparing different state management solutions including Context API, Redux, Zustand, and Jotai for modern React applications.",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    category: "React",
    tags: ["React", "State Management", "Redux"],
  },
  {
    title: "Web Accessibility Fundamentals",
    excerpt: "Essential accessibility principles every developer should know to create inclusive web experiences for all users.",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    category: "Accessibility",
    tags: ["Accessibility", "A11y", "Web Standards"],
  },
]

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Card Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardContent className="p-6 space-y-4 relative">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-primary"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6"
                    initial={false}
                  >
                    <Button className="w-full" variant="default">
                      Read More
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <a href="/blog">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
