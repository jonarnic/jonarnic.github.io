'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-900">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-lg text-slate-600">University of Georgia | Athens, GA</p>
            <p className="text-slate-500">Aug 2011 — May 2015</p>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Award className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Certifications</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>AWS Certified Solutions Architect - Associate</li>
              <li>Azure Developer Associate</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


