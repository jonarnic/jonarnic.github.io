'use client'

import { motion } from 'framer-motion'

type Project = {
  title: string
  overview: string
  responsibilities: string[]
  techStack: string[]
}

const techIconMap: Record<string, { icon?: string; iconUrl?: string }> = {
  Python: { icon: 'python' },
  FastAPI: { icon: 'fastapi' },
  Django: { icon: 'django' },
  NLP: { icon: 'python' },
  RAG: { icon: 'openai' },
  LangChain: { iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  FAISS: { icon: 'numpy' },
  PostgreSQL: { icon: 'postgres' },
  React: { icon: 'react' },
  'React.js': { icon: 'react' },
  Redux: { icon: 'redux' },
  'React Native': { icon: 'react' },
  MongoDB: { icon: 'mongodb' },
  Azure: { icon: 'azure' },
  Docker: { icon: 'docker' },
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
    title: 'AI Document Summarization Platform',
    overview:
      'End-to-end ML pipeline to extract, summarize, and categorize unstructured legal and financial documents for compliance teams.',
    responsibilities: [
      'Designed an end-to-end ML pipeline to extract, summarize, and categorize unstructured legal and financial documents.',
      'Implemented NLP models to identify key clauses and generate concise summaries for compliance teams.',
      'Integrated RAG techniques to enable context-aware search across millions of documents, reducing manual review time by 60%.',
    ],
    techStack: ['Python', 'NLP', 'RAG', 'LangChain', 'FAISS', 'FastAPI', 'PostgreSQL'],
  },
  {
    title: 'Real-Time Analytics Dashboard',
    overview:
      'High-performance dashboard to visualize live user interaction data from multiple services with sub-200ms latency.',
    responsibilities: [
      'Developed a high-performance dashboard to visualize live user interaction data from multiple services.',
      'Implemented backend APIs and caching layers to process millions of events with sub-200ms latency.',
      'Designed interactive visualizations in React.js and Redux, enabling teams to monitor trends and respond immediately.',
    ],
    techStack: [
      'Python',
      'Django',
      'FastAPI',
      'React',
      'Redux',
      'React Native',
      'MongoDB',
      'PostgreSQL',
      'Azure',
      'Docker',
      'n8n',
    ],
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
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">Overview</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{project.overview}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">Highlights</p>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-sm text-slate-600">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800 mb-2">Technologies</p>
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
