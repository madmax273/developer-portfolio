"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Briefcase, Zap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Decimal Point Analytics",
      period: "May 2023 - August 2023",
      description: [
        "Developed and maintained a Timesheet Portal by building RESTful APIs using FastAPI and designing responsive UI components with React.js and Node.js.",
        "Gained hands-on experience in DevOps by containerizing applications with Docker and automating a CI/CD pipeline using Jenkins.",
        "Acquired foundational knowledge of cloud infrastructure on AWS and core concepts like networking and shell scripting.",
        "Explored emerging technologies including Hedera Hashgraph and Vector Databases (Pinecone), demonstrating a proactive learning approach.",
      ],
      skills: [
        "React", "Node.js", "Docker", "Jenkins", "CI/CD", "AWS", "PostgreSQL", "Git", "Pinecone"
      ]
    },
    {
      title: "Software Development Engineer",
      company: "Decimal Point Analytics",
      period: "Oct 2024 - Present",
      description: [
        "Architected and developed a high-performance news aggregation platform using FastAPI, processing over 5000+ articles daily with real-time AI insights.",
        "Engineered a scalable microservices architecture with Docker and Redis Queue (RQ) to handle 1000+ concurrent background tasks.",
        "Integrated a hybrid database solution (PostgreSQL and MongoDB) with a Redis caching layer, reducing database queries by 40%.",
        "Developed a multi-role HR Portal to automate processes like reimbursements and automated employee exit workflows.",
        "Streamlined the recruitment process by integrating LLM to convert transcripts and extract key candidate information.",
        "Built and maintained core RESTful APIs, improving data processing efficiency by 30%."
      ],
      skills: [
        "Python", "FastAPI", "React", "Django", "LLM", "Redis", "Docker", "PostgreSQL", "MongoDB", "OpenAI GPT", "Microservices"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Work Experience</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions in the tech industry.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full hidden md:block"></div>

          {experiences.reverse().map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative mb-12 md:mb-20 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:ml-0" : "md:pl-16 md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-8 w-6 h-6 rounded-full bg-background border-4 border-primary transform -translate-x-1/2 md:translate-x-0 hidden md:block ${index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'} shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10`}>
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
              </div>

              <Card className="glass-panel hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-white/10 dark:border-white/5 relative group overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10 pt-8 px-8">
                  <div className={`flex flex-col gap-3 items-start`}>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 leading-tight">{exp.title}</h3>
                  </div>
                  <div className={`flex flex-wrap items-center gap-4 mt-3 text-muted-foreground`}>
                    <div className="flex items-center font-semibold text-primary/90 text-[15px]">
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <Badge variant="secondary" className="font-medium bg-secondary/80 backdrop-blur-sm border-0 text-secondary-foreground shadow-sm">
                      <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-8">
                  <ul className={`space-y-4 mb-8 mt-2`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground/90 leading-relaxed flex items-start gap-3 justify-start">
                        <Zap className={`h-5 w-5 text-primary/60 shrink-0 mt-0.5`} />
                        <span className="flex-1 text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-2 pt-6 border-t border-border/50`}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-xs rounded-lg bg-background/60 border border-border/60 font-semibold shadow-sm text-foreground/80 hover:text-primary transition-colors hover:border-primary/40 hover:bg-background">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
