"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechStack() {
  const techCategories = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Framer Motion", icon: "🔄" },
      { name: "Embla Carousel", icon: "🛍️" },
      { name: "Radix UI", icon: "🌈" },
      { name: "Zod", icon: "✨" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Django", icon: <img src="/django.svg" alt="Django" className="h-6 w-6 dark:invert" /> },
      { name: "Flask", icon: <img src="/flask.svg" alt="Flask" className="h-6 w-6 dark:invert" /> },
      { name: "Express", icon: "E" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐘" },
      { name: "PostgreSQL", icon: <img src="/postgresql.svg" alt="PostgreSQL" className="h-6 w-6" /> },
      { name: "Redis", icon: <img src="/redis.svg" alt="Redis" className="h-6 w-6" /> },
      { name: "AWS", icon: <img src="/aws.svg" alt="AWS" className="h-6 w-6 dark:invert" /> },
      { name: "Docker", icon: "🐳" },
    ],
    tools: [
      { name: "Git", icon: "🔄" },
      { name: "VS Code", icon: "📝" },
      { name: "Figma", icon: "🎨" },
      { name: "Vercel", icon: "▲" },
      { name: "PowerAutomate", icon: "🔥" },
    ],
  }

  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 dark:opacity-20 animate-blob"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Tech Stack</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the technologies I work with to build modern, responsive, and scalable applications.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="flex flex-wrap justify-center w-full max-w-md mx-auto mb-12 p-1.5 h-auto glass-panel rounded-full overflow-hidden shadow-sm">
            {Object.keys(techCategories).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="capitalize rounded-full px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(techCategories).map(([category, technologies]) => (
            <TabsContent key={category} value={category} className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="overflow-hidden h-full glass-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 rounded-2xl group border-border/50">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full relative z-10">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm flex items-center justify-center h-12 w-12">
                            {typeof tech.icon === 'string' ? <span className="text-3xl">{tech.icon}</span> : tech.icon}
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-foreground/90 group-hover:text-primary transition-colors">{tech.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
