'use client'

import { motion } from 'framer-motion'
type Project = {
  company: string
  role: string
  title: string
  overview: string
  responsibilities: string[]
  techStack: string[]
}

const techIconMap: Record<string, { icon?: string; iconUrl?: string }> = {
  React: { icon: 'react' },
  'React Native': { icon: 'react' },
  'Vue.js': { icon: 'vue' },
  Angular: { icon: 'angular' },
  'Node.js': { icon: 'nodejs' },
  Python: { icon: 'python' },
  FastAPI: { icon: 'fastapi' },
  Django: { icon: 'django' },
  'Ruby on Rails': { icon: 'rails' },
  Go: { icon: 'go' },
  Java: { icon: 'java' },
  Swift: { icon: 'swift' },
  PostgreSQL: { icon: 'postgres' },
  MongoDB: { icon: 'mongodb' },
  MySQL: { icon: 'mysql' },
  Redis: { icon: 'redis' },
  AWS: { icon: 'aws' },
  Azure: { icon: 'azure' },
  Docker: { icon: 'docker' },
  'REST APIs': { icon: 'postman' },
  'Event-driven architecture': { icon: 'kafka' },
  n8n: { iconUrl: 'https://cdn.simpleicons.org/n8n/ea4b71' },
}

const getTechIconSrc = (tech: string) => {
  const iconInfo = techIconMap[tech]
  if (iconInfo?.iconUrl) return iconInfo.iconUrl
  if (iconInfo?.icon) return `https://skillicons.dev/icons?i=${iconInfo.icon}`
  return 'https://skillicons.dev/icons?i=git'
}

const projects: Project[] = [
  {
    company: 'Stripe',
    role: 'Senior Software Engineer',
    title: 'Global Payment Processing Platform',
    overview:
      'Built a distributed payment platform responsible for processing online transactions, payment authorization, and settlement workflows for merchants.',
    responsibilities: [
      'Designed microservices-based payment architecture supporting payment creation, authorization, capture, and reconciliation.',
      'Implemented idempotent API mechanisms so duplicate requests would not charge customers twice.',
      'Built event-driven processing pipelines for payment events such as successful transactions, failures, and refunds.',
      'Implemented retry and reconciliation mechanisms for timeout scenarios between payment providers and internal systems.',
      'Improved system reliability through distributed logging and observability.',
    ],
    techStack: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'REST APIs', 'Event-driven architecture'],
  },
  {
    company: 'Stripe',
    role: 'Senior Software Engineer',
    title: 'AI Fraud Detection & Risk Scoring System',
    overview:
      'Developed an intelligent fraud detection service to identify suspicious transactions and reduce fraudulent payments.',
    responsibilities: [
      'Built Python FastAPI services to evaluate transactions in real time.',
      'Integrated machine learning models to calculate risk scores for payments.',
      'Implemented rule-based fraud detection pipelines for suspicious behavior patterns.',
      'Automated investigation workflows using n8n automation pipelines.',
      'Built monitoring dashboards to help fraud analysts review flagged transactions.',
    ],
    techStack: ['Python', 'FastAPI', 'React', 'Angular', 'PostgreSQL', 'Redis', 'AWS', 'n8n'],
  },
  {
    company: 'Teladoc Health',
    role: 'Senior Full Stack Engineer',
    title: 'Telemedicine Platform',
    overview:
      'Built a secure telemedicine platform enabling virtual consultations between doctors and patients.',
    responsibilities: [
      'Developed physician web dashboards for managing consultations and patient data.',
      'Implemented backend APIs to handle patient records, appointment scheduling, and video session management.',
      'Built cross-platform mobile applications for patients to join telemedicine sessions.',
      'Implemented authentication and access control for secure healthcare data access.',
    ],
    techStack: ['React', 'Angular', 'React Native', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    company: 'Teladoc Health',
    role: 'Senior Full Stack Engineer',
    title: 'AI Clinical Documentation Assistant',
    overview:
      'Developed an AI system that automatically generates clinical notes and patient summaries during doctor consultations.',
    responsibilities: [
      'Built FastAPI services to process patient records and generate structured medical summaries.',
      'Integrated AI APIs to extract key information from consultation transcripts.',
      'Automated hospital workflows such as documentation and follow-up scheduling.',
      'Reduced manual documentation time for doctors.',
    ],
    techStack: ['Python', 'FastAPI', 'Azure', 'MongoDB', 'Redis', 'n8n'],
  },
  {
    company: 'eBay',
    role: 'Full Stack Engineer',
    title: 'Merchant Analytics Dashboard',
    overview:
      'Developed an analytics platform helping merchants track sales performance, inventory metrics, and customer activity.',
    responsibilities: [
      'Built modern web dashboards displaying real-time store metrics.',
      'Developed backend services to aggregate sales, order, and inventory data.',
      'Implemented analytics pipelines to generate reports for merchants.',
      'Optimized queries and caching for dashboard performance.',
    ],
    techStack: ['React', 'Vue.js', 'Ruby on Rails', 'MySQL', 'Redis', 'AWS'],
  },
  {
    company: 'eBay',
    role: 'Full Stack Engineer',
    title: 'Mobile Commerce Platform',
    overview:
      'Developed mobile features enabling customers to browse products, place orders, and track purchases.',
    responsibilities: [
      'Built cross-platform mobile applications using React Native.',
      'Developed backend APIs supporting product search, checkout, and order tracking.',
      'Implemented push notification systems for order updates.',
      'Improved mobile shopping performance and usability.',
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
  },
  {
    company: 'Uber',
    role: 'Software Engineer',
    title: 'iOS Rider Application',
    overview:
      "Worked on core features of Uber's iOS rider application, used by millions of riders globally.",
    responsibilities: [
      'Built ride request and ride tracking features in the iOS app.',
      'Integrated backend APIs for trip management.',
      'Implemented real-time location tracking for ride status updates.',
      'Improved mobile performance and user experience.',
    ],
    techStack: ['Swift', 'Java', 'MongoDB', 'AWS'],
  },
  {
    company: 'Uber',
    role: 'Software Engineer',
    title: 'Driver Dispatch Automation System',
    overview:
      'Developed backend services responsible for matching riders with nearby drivers.',
    responsibilities: [
      'Built backend services to process ride requests and driver availability.',
      'Implemented real-time dispatch algorithms to match riders and drivers efficiently.',
      'Optimized the dispatch system for scalability and low latency.',
      'Containerized services for deployment using Docker.',
    ],
    techStack: ['Java', 'Node.js', 'Redis', 'Docker', 'AWS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={`${project.company}-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold tracking-wide uppercase text-primary-700">
                  {project.company} - {project.role}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{project.title}</h3>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">Overview</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{project.overview}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">Key Responsibilities</p>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-sm text-slate-600">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700"
                      >
                        <img
                          src={getTechIconSrc(tech)}
                          alt={tech}
                          width={14}
                          height={14}
                          loading="lazy"
                        />
                        {tech}
                      </span>
                    ))}
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


