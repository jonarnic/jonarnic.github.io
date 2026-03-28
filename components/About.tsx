'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About</h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              Senior AI and Full-Stack Engineer with 9+ years of experience architecting scalable
              cloud-native applications and enterprise AI systems. Proven expertise at Microsoft,
              IBM, and ScienceSoft building ML pipelines, distributed microservices, and
              high-performance web platforms. Skilled at bridging complex system design and
              user-centric features to drive measurable business impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
