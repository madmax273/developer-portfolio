"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding bg-muted/20 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 text-sm font-medium border-primary/10">
            <MessageSquare className="w-4 h-4 text-primary" />
            Let&apos;s Talk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;m currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Card className="h-full glass-panel shadow-xl border-white/10 dark:border-white/5 rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full filter blur-[40px]"></div>
              <CardContent className="p-8 relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8">Contact Info</h3>

                <div className="space-y-8 flex-grow">
                  {[
                    { icon: Mail, label: "Email", value: "punitay273@gmail.com", href: "mailto:punitay273@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 8306579277", href: "tel:+918306579277" },
                    { icon: MapPin, label: "Location", value: "Gandhinagar, Gujarat, India", href: null }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mr-4 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="font-semibold text-foreground/80 mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    Prefer email for initial contact. I typically respond within <span className="font-semibold text-foreground">24 hours</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <Card className="glass-panel shadow-xl border-white/10 dark:border-white/5 rounded-3xl relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-tr-full filter blur-[60px]"></div>
              <CardContent className="p-8 md:p-10 relative z-10">
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Name</label>
                        <Input 
                            name="name" 
                            placeholder="John Doe" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="h-12 bg-background/50 border-white/10 dark:border-white/5 focus-visible:ring-primary focus-visible:border-primary rounded-xl transition-all shadow-inner px-4 text-base"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Email</label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-12 bg-background/50 border-white/10 dark:border-white/5 focus-visible:ring-primary focus-visible:border-primary rounded-xl transition-all shadow-inner px-4 text-base"
                        />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 ml-1">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="resize-none bg-background/50 border-white/10 dark:border-white/5 focus-visible:ring-primary focus-visible:border-primary rounded-xl transition-all shadow-inner p-4 text-base"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center text-base">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
