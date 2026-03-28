'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  companyLogoUrl: string
  companyLogoFallbackUrl: string
}

const techIconMap: Record<string, { icon?: string; iconUrl?: string }> = {
  React: { icon: 'react' },
  'Vue.js': { icon: 'vue' },
  Angular: { icon: 'angular' },
  'React Native': { icon: 'react' },
  'Node.js': { icon: 'nodejs' },
  Python: { icon: 'python' },
  FastAPI: { icon: 'fastapi' },
  Django: { icon: 'django' },
  'Ruby on Rails': { icon: 'rails' },
  Go: { icon: 'go' },
  Java: { icon: 'java' },
  MongoDB: { icon: 'mongodb' },
  PostgreSQL: { icon: 'postgres' },
  MySQL: { icon: 'mysql' },
  Redis: { icon: 'redis' },
  AWS: { icon: 'aws' },
  Azure: { icon: 'azure' },
  Docker: { icon: 'docker' },
  Swift: { icon: 'swift' },
  n8n: { iconUrl: 'https://cdn.simpleicons.org/n8n/ea4b71' },
}

const getTechIconSrc = (tech: string) => {
  const iconInfo = techIconMap[tech]
  if (iconInfo?.iconUrl) {
    return iconInfo.iconUrl
  }
  if (iconInfo?.icon) {
    return `https://skillicons.dev/icons?i=${iconInfo.icon}`
  }
  return 'https://skillicons.dev/icons?i=git'
}

const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA (Remote)',
    period: 'Jan 2023 — Present',
    companyLogoUrl: 'https://cdn.simpleicons.org/stripe/635bff',
    companyLogoFallbackUrl: 'https://logo.clearbit.com/stripe.com',
    description: [
      'Architected and developed a global payment processing platform supporting millions of transactions per day, building Node.js and Go microservices with idempotent payment APIs, event-driven processing pipelines, and highly available services deployed on AWS using Docker.',
      'Built an AI-powered fraud detection and risk scoring system using Python (FastAPI), integrating machine learning models to detect anomalous transactions and automating investigation workflows with n8n, while delivering internal analytics dashboards using React and Angular.',
    ],
    technologies: ['Node.js', 'Go', 'Python', 'FastAPI', 'React', 'Angular', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'n8n'],
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Teladoc Health',
    location: 'New York, NY (Remote)',
    period: 'Mar 2020 — Dec 2022',
    companyLogoUrl: 'https://www.mmm-online.com/wp-content/uploads/sites/2/2023/01/Teledoc_logo2-860x574.jpg',
    companyLogoFallbackUrl: 'https://logo.clearbit.com/teladochealth.com',
    description: [
      'Led development of a telemedicine platform used by thousands of healthcare providers and patients, building physician dashboards with React and Angular, backend APIs with Django, and cross-platform mobile applications with React Native while ensuring secure and compliant healthcare data handling.',
      'Developed an AI-powered clinical documentation assistant that automatically generates structured visit summaries using Python (FastAPI) and AI APIs, improving physician workflow efficiency and integrating automated processes through n8n deployed on Azure infrastructure.',
    ],
    technologies: ['React', 'Angular', 'React Native', 'Python', 'Django', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Redis', 'Azure', 'Docker', 'n8n'],
  },
  {
    title: 'Full Stack Engineer',
    company: 'eBay',
    location: 'San Jose, CA',
    period: 'Jul 2017 — Feb 2020',
    companyLogoUrl: 'https://cdn.simpleicons.org/ebay/e53238',
    companyLogoFallbackUrl: 'https://logo.clearbit.com/ebay.com',
    description: [
      'Developed a merchant analytics and store management dashboard using React and Vue.js with backend services built in Ruby on Rails, enabling merchants to monitor sales performance, customer insights, and operational metrics across thousands of online stores.',
      'Built a mobile commerce platform using React Native supported by Node.js backend APIs, implementing product browsing, payment processing, order tracking, and push notifications to enhance the global mobile shopping experience.',
    ],
    technologies: ['React', 'Vue.js', 'React Native', 'Node.js', 'Ruby on Rails', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    title: 'Software Engineer',
    company: 'Uber',
    location: 'San Francisco, CA',
    period: 'Jun 2016 — Jun 2017',
    companyLogoUrl: 'https://cdn.simpleicons.org/uber/000000',
    companyLogoFallbackUrl: 'https://logo.clearbit.com/uber.com',
    description: [
      'Developed core features for the iOS rider application using Swift integrated with Java backend services, enabling real-time ride requests, location tracking, and trip lifecycle management.',
      'Implemented backend components of a driver dispatch automation system using Java microservices and Docker containers to support scalable driver-rider matching and efficient ride allocation.',
    ],
    technologies: ['Swift', 'Java', 'Node.js', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Docker'],
  },
]


export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20 pb-8 border-l-2 border-slate-200 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-8 top-0 w-16 h-16 rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden flex items-center justify-center">
                  <img
                    src={exp.companyLogoUrl}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="object-contain"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = exp.companyLogoFallbackUrl
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <span className="font-semibold text-slate-900">{exp.company}</span>
                    <span className="flex items-center gap-1 text-sm">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4 ml-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={`${exp.company}-${tech}`}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-700"
                        >
                          <img
                            src={getTechIconSrc(tech)}
                            alt={tech}
                            width={16}
                            height={16}
                            loading="lazy"
                          />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


