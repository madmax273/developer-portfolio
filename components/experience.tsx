"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Decimal Point Analytics",
      period: "May 2023 - August 2023",
      description: [
        "Developed and maintained RESTful APIs using FastAPI, improving data processing efficiency by 30%",
        "Implemented responsive UI components with React and Material UI, enhancing user experience",
        "Collaborated with cross-functional teams to deliver features on schedule",
        "Optimized database queries, reducing response time by 25%",
      ],
      skills: ["FastAPI", "React", "PostgreSQL", "Docker"],
    },
    // You can add more experiences in the future
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <div className="absolute top-5 left-0 md:left-auto md:right-0 w-5 h-5 rounded-full bg-primary transform translate-x-[-50%] md:translate-x-[50%]"></div>

              <Card className="glass-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <Badge variant="outline" className="font-normal">
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs rounded-full bg-primary/10 font-medium">
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
