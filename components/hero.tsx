"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown, Instagram, Mail, LayoutGrid } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center section-padding pt-24 overflow-hidden">
        
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 dark:opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium border-primary/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="block mb-2">Hello, I&apos;m</span>
            <span className="gradient-text">Punit Yadav</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            I build elegant, performant, and hyper-modern full-stack web applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Link href="#projects">
                <LayoutGrid className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg backdrop-blur-md bg-white/5 dark:bg-black/5 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all hover:-translate-y-1 shadow-sm">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center gap-6"
          >
            {[{
              href: "https://github.com/madmax273",
              icon: Github,
              label: "GitHub"
            }, {
              href: "https://linkedin.com/in/punit-yadav-6012a4232/",
              icon: Linkedin,
              label: "LinkedIn"
            }, {
              href: "mailto:punitay273@gmail.com",
              icon: Mail,
              label: "Email"
            }, {
              href: "https://www.instagram.com/punitpy_27/",
              icon: Instagram,
              label: "Instagram"
            }].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, translateY: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full glass-card hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-white/20 dark:border-white/10"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="#about">
          <Button variant="ghost" size="icon" className="animate-bounce rounded-full h-14 w-14 glass-panel border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
