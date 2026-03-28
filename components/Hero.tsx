'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  if (!mounted) {
    return null
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
              Jonathan Arnic
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 font-medium mb-2">
              Senior Software Engineer | Full Stack Web & Mobile | AI Integration & Automation
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              U.S. Citizen · Houston, TX ·{' '}
              <a href="mailto:jonathanan925@gmail.com" className="text-primary-600 hover:underline">
                jonathanan925@gmail.com
              </a>{' '}
              ·{' '}
              <a href="tel:+15127615601" className="text-primary-600 hover:underline">
                (512) 761-5601
              </a>
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Senior AI and Full-Stack Engineer with 9+ years of experience architecting scalable
              cloud-native applications and enterprise AI systems. Proven expertise at Microsoft,
              IBM, and ScienceSoft building ML pipelines, distributed microservices, and
              high-performance web platforms—bridging complex system design and user-centric
              features to drive measurable business impact.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-4 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://github.com/jonarnic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/jonaa925"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:jonathanan925@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="tel:+15127615601"
              className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition-colors"
            >
              <Phone size={18} />
              <span>Call</span>
            </a>
            <a
              href="https://jonarnic.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-800 rounded-lg hover:bg-white/80 transition-colors"
            >
              <Globe size={18} />
              <span>Website</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
