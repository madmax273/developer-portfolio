"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const skills = ["Python", "JavaScript","TypeScript","C++","Django","Flask","React", "Next.js", "FastAPI", "Node.js", "Express.js","MySQL","MongoDB","Redis","PostgreSQL","LLM","Vector Database","DevOps","Azure","Git","Docker","Vercel","PowerAutomate","AI Agents","RAG"]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 dark:opacity-20 animate-blob"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/profile-pic.jpeg" alt="Punit Yadav" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <Card className="glass-panel border-white/10 dark:border-white/5 shadow-xl relative overflow-hidden group rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 md:p-10 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">My Journey</h3>
                <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
                  I&apos;m a passionate Full Stack Developer with expertise in modern web technologies. I enjoy building
                  responsive, user-friendly applications that solve real-world problems.
                </p>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I strive to create seamless
                  experiences that delight users and meet business objectives. I specialize in building highly scalable microservices and integrating complex AI workflows.
                </p>
              </CardContent>
            </Card>

            <div className="glass-card rounded-3xl p-8 shadow-xl border-white/10 dark:border-white/5">
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * (index % 10) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="px-4 py-2 rounded-xl bg-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/50 text-sm font-semibold shadow-sm backdrop-blur-sm cursor-default inline-block">
                      {skill}
                    </span>
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
