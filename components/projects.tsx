"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Server, LayoutGrid } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "PDFier",
      description: "A web application designed to simplify PDF management with a powerful suite of tools and an integrated AI chat assistant. Handles documents effortlessly from basic editing to advanced RAG-powered queries.",
      image: "/PDFier.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "FastAPI", "Python", "LangChain", "Pinecone", "MongoDB", "Docker", "RAG"],
      github: "https://github.com/madmax273/PDFier_frontend",
      github_backend: "https://github.com/madmax273/PDFier_backend",
      live: "https://pdfier-frontend1.vercel.app/",
    },
    {
      title: "Celebratr",
      description: "An event management platform for corporate events, seamlessly connecting vendors and clients in various cities, facilitating a streamlined booking process.",
      image: "/celebratr.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "FastAPI", "Redis", "Docker", "AWS", "LLM"],
      github: "https://github.com/CELEBRATR/CELEBRATR-FE",
      github_backend: "https://github.com/CELEBRATR/CELEBRATR-BE",
      live: "https://celebratr.com",
    },
    {
      title: "ToorGuide",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/toorGuide.png?height=400&width=800",
      tags: ["Node.js", "MongoDB", "Express", "MERN Stack"],
      github: "https://github.com/madmax273/campProject",
      live: "https://toorguide.com",
    },
    {
      title: "Doglelo",
      description: "An innovative platform that showcases diverse canine and feline species, enabling users to discover and connect with their furry friends.",
      image: "/doglelo.png?height=400&width=800",
      tags: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/madmax273/Doglelo",
      live: "https://doglelo.com",
    },
  ]

  return (
    <section id="projects" className="section-padding relative bg-muted/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-medium border-primary/10">
            <LayoutGrid className="w-4 h-4 text-primary" />
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of my best work spanning AI integrations, complex backends, and beautiful frontend applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 pl-4 pr-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden glass-panel border-white/10 dark:border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.2)] bg-background/50 backdrop-blur-xl rounded-3xl">
                <div className="relative h-64 md:h-72 w-full overflow-hidden p-3 pb-0">
                  <div className="relative w-full h-full rounded-t-2xl overflow-hidden border border-border/50 bg-muted/30">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                    
                    {/* Floating Title Inside Image */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight drop-shadow-md">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="flex-grow pt-8 px-8 pb-4 relative z-10 flex flex-col justify-between">
                  <div>
                    <p className="text-muted-foreground/90 text-[15px] md:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-secondary/80 text-secondary-foreground font-medium shadow-sm border border-border/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="px-8 pb-8 pt-4 gap-3 flex-wrap border-t border-border/30 mt-4">
                  <Button asChild variant="default" className="rounded-xl shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm h-11 px-5">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl glass-card border-border/50 hover:bg-secondary/80 hover:-translate-y-0.5 transition-all text-sm h-11 px-4">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Frontend
                    </Link>
                  </Button>
                  {project.github_backend && (
                  <Button asChild variant="outline" className="rounded-xl glass-card border-border/50 hover:bg-secondary/80 hover:-translate-y-0.5 transition-all text-sm h-11 px-4">
                    <Link href={project.github_backend} target="_blank" rel="noopener noreferrer">
                      <Server className="mr-2 h-4 w-4" />
                      Backend
                    </Link>
                  </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
