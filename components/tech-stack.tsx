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
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Framer Motion", icon: "🔄" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Express", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    tools: [
      { name: "Git", icon: "🔄" },
      { name: "Docker", icon: "🐳" },
      { name: "VS Code", icon: "📝" },
      { name: "Figma", icon: "🎨" },
      { name: "Vercel", icon: "▲" },
    ],
  }

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            These are the technologies I work with to build modern, responsive, and scalable applications.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {Object.entries(techCategories).map(([category, technologies]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full glass-card hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                        <div className="text-3xl mb-2">{tech.icon}</div>
                        <h3 className="font-medium">{tech.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
