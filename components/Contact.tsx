'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jeffbai924@gmail.com',
    href: 'mailto:jeffbai924@gmail.com',
    color: 'text-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(805) 268-7837',
    href: 'tel:+18052687837',
    color: 'text-green-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Athens, GA',
    href: null,
    color: 'text-red-600',
  },
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/jefbbai',
    color: 'hover:bg-slate-900 hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jefbb',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    icon: Globe,
    label: 'Website',
    href: 'https://jefbbai.github.io',
    color: 'hover:bg-emerald-600 hover:text-white',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Senior Software Engineer based in Athens, GA and open to impactful software
              engineering opportunities across full-stack web and mobile systems, cloud-native
              architecture, and AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const content = (
                <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <Icon className={`w-8 h-8 mb-3 ${method.color}`} />
                  <span className="text-sm font-medium text-slate-500 mb-1">{method.label}</span>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-slate-900 font-medium hover:text-primary-600 transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-slate-900 font-medium">{method.value}</span>
                  )}
                </div>
              )

              return method.href ? (
                <a key={method.label} href={method.href}>
                  {content}
                </a>
              ) : (
                <div key={method.label}>{content}</div>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-slate-100 text-slate-700 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


