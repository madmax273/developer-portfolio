import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-4 relative overflow-hidden bg-background">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="font-bold text-2xl tracking-tighter mb-2">
              <span className="gradient-text">PY</span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} Punit Yadav. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            {[
              { href: "https://github.com/madmax273", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/punit-yadav-6012a4232/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:punitay273@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.instagram.com/punitpy_27/", icon: Instagram, label: "Instagram" }
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm border-white/10 dark:border-white/5"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
