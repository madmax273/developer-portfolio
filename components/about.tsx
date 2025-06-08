"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const skills = ["Python", "JavaScript","TypeScript","C++","Django","Flask","React", "Next.js", "FastAPI", "Node.js", "Express.js","MySQL","MongoDB","Redis","PostgreSQL","LLM","Vector Database","DevOps","Azure","Git","Docker","Vercel"]

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-primary/10">
              <Image src="/profile-pic.jpg?height=400&width=400" alt="Punit Yadav" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="glass-card shadow-xl">
              <CardContent className="p-6">
                <p className="text-lg">
                  I&apos;m a passionate Full Stack Developer with expertise in modern web technologies. I enjoy building
                  responsive, user-friendly applications that solve real-world problems.
                </p>
                <p className="mt-4 text-lg">
                  With a strong foundation in both frontend and backend development, I strive to create seamless
                  experiences that delight users and meet business objectives.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <span className="px-1.5 py-1 rounded bg-primary/10 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
