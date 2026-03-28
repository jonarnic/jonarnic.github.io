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
  Python: { icon: 'python' },
  FastAPI: { icon: 'fastapi' },
  Flask: { icon: 'flask' },
  'Node.js': { icon: 'nodejs' },
  LangChain: { iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  NLP: { icon: 'python' },
  RAG: { icon: 'openai' },
  React: { icon: 'react' },
  'React.js': { icon: 'react' },
  Docker: { icon: 'docker' },
  Kubernetes: { icon: 'kubernetes' },
  'AWS EKS': { icon: 'kubernetes' },
  AWS: { icon: 'aws' },
  GraphQL: { icon: 'graphql' },
  TypeScript: { icon: 'typescript' },
  Redux: { icon: 'redux' },
  'AWS Lambda': { icon: 'aws' },
  'GitHub Actions': { icon: 'githubactions' },
  'C#': { icon: 'csharp' },
  '.NET Core': { icon: 'dotnet' },
  Azure: { icon: 'azure' },
  'Azure SQL': { icon: 'azure' },
  'Service Bus': { icon: 'azure' },
  PostgreSQL: { icon: 'postgres' },
  Redis: { icon: 'redis' },
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
    title: 'Senior AI & Full-Stack Engineer',
    company: 'ScienceSoft',
    location: 'United States (Remote)',
    period: 'Feb 2024 — Present',
    companyLogoUrl: 'https://logo.clearbit.com/sciencesoft.com',
    companyLogoFallbackUrl:
      'https://ui-avatars.com/api?name=ScienceSoft&background=0284c7&color=fff&size=128',
    description: [
      'Architected ML-driven document analysis pipelines using Python and NLP, automating the extraction of key data points from unstructured documents for international clients.',
      'Developed a Context-Aware Query Service using RAG (Retrieval-Augmented Generation) and LangChain, improving search accuracy and relevance in enterprise knowledge bases.',
      'Engineered backend microservices for high-volume data workflows using FastAPI and Node.js, ensuring sub-100ms latency for critical data ingestion tasks.',
      'Orchestrated containerized infrastructure using Docker and Kubernetes on AWS EKS, achieving 99.9% system uptime through automated scaling and self-healing.',
      'Built real-time dashboards in React.js to visualize large-scale analytics platforms, processing and displaying millions of records with optimized rendering performance.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'LangChain',
      'NLP',
      'RAG',
      'React.js',
      'Docker',
      'Kubernetes',
      'AWS EKS',
    ],
  },
  {
    title: 'Senior Full-Stack Engineer',
    company: 'IBM',
    location: 'United States (Remote)',
    period: 'Jan 2022 — Jan 2024',
    companyLogoUrl: 'https://cdn.simpleicons.org/ibm/006699',
    companyLogoFallbackUrl: 'https://logo.clearbit.com/ibm.com',
    description: [
      'Led the design of a federated GraphQL API gateway using Node.js, centralizing data from multiple enterprise microservices and reducing frontend request overhead by 40%.',
      'Developed production web platforms using React, TypeScript, and Redux, prioritizing responsive design and accessibility for global SaaS analytics users.',
      'Implemented event-driven microservices on AWS Lambda to automate complex data ingestion workflows, significantly reducing server costs and manual overhead.',
      'Established automated CI/CD pipelines using GitHub Actions, ensuring consistent code quality through enforced linting and unit testing coverage.',
    ],
    technologies: [
      'Node.js',
      'GraphQL',
      'React',
      'TypeScript',
      'Redux',
      'AWS Lambda',
      'GitHub Actions',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'Microsoft',
    location: 'Houston, TX (Hybrid)',
    period: 'Jun 2019 — Dec 2021',
    companyLogoUrl: 'https://cdn.simpleicons.org/microsoft/00a4ef',
    companyLogoFallbackUrl: 'https://logo.clearbit.com/microsoft.com',
    description: [
      'Developed distributed backend services using C# and .NET Core in Azure, supporting thousands of internal users.',
      'Architected REST APIs integrated with Azure SQL and Service Bus to streamline infrastructure management.',
      'Optimized database performance by refactoring stored procedures and adding indexing, reducing high-latency queries by 45%.',
      'Contributed to internal developer tools standardizing cloud integration, improving deployment velocity.',
    ],
    technologies: ['C#', '.NET Core', 'Azure', 'Azure SQL', 'Service Bus'],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'TechSolutions Inc',
    location: 'Houston, TX',
    period: 'Mar 2017 — May 2019',
    companyLogoUrl: 'https://logo.clearbit.com/techsolutions.com',
    companyLogoFallbackUrl:
      'https://ui-avatars.com/api?name=TechSolutions&background=0f172a&color=fff&size=128',
    description: [
      'Built full-stack web applications using React and Node.js, managing end-to-end development from database design to deployment.',
      'Optimized PostgreSQL databases and implemented Redis caching to improve page load speed by 50%.',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
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
