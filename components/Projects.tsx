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
  Python: { icon: 'python' },
  FastAPI: { icon: 'fastapi' },
  Django: { icon: 'django' },
  Flask: { icon: 'flask' },
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
  'Node.js': { icon: 'nodejs' },
  GraphQL: { icon: 'graphql' },
  TypeScript: { icon: 'typescript' },
  'AWS Lambda': { icon: 'aws' },
  'GitHub Actions': { icon: 'githubactions' },
  'C#': { icon: 'csharp' },
  '.NET Core': { icon: 'dotnet' },
  'Azure SQL': { icon: 'azure' },
  'Service Bus': { icon: 'azure' },
  Kubernetes: { icon: 'kubernetes' },
  AWS: { icon: 'aws' },
  'AWS EKS': { icon: 'kubernetes' },
  Express: { icon: 'express' },
  Redis: { icon: 'redis' },
  MySQL: { icon: 'mysql' },
  'REST APIs': { icon: 'postman' },
  'Event-driven architecture': { icon: 'kafka' },
}

const getTechIconSrc = (tech: string) => {
  const iconInfo = techIconMap[tech]
  if (iconInfo?.iconUrl) return iconInfo.iconUrl
  if (iconInfo?.icon) return `https://skillicons.dev/icons?i=${iconInfo.icon}`
  return 'https://skillicons.dev/icons?i=git'
}

const projects: Project[] = [
  {
    company: 'ScienceSoft',
    role: 'Senior AI & Full-Stack Engineer',
    title: 'AI Document Summarization Platform',
    overview:
      'End-to-end ML pipeline to extract, summarize, and categorize unstructured legal and financial documents for compliance teams.',
    responsibilities: [
      'Designed pipelines to extract, summarize, and categorize unstructured legal and financial documents.',
      'Implemented NLP models to identify key clauses and generate concise summaries for compliance teams.',
      'Integrated RAG to enable context-aware search across large document sets, reducing manual review time by 60%.',
    ],
    techStack: ['Python', 'NLP', 'RAG', 'LangChain', 'FAISS', 'FastAPI', 'PostgreSQL'],
  },
  {
    company: 'ScienceSoft',
    role: 'Senior AI & Full-Stack Engineer',
    title: 'Context-Aware RAG Knowledge Search',
    overview:
      'Retrieval-augmented query service that improves search accuracy and relevance across enterprise knowledge bases.',
    responsibilities: [
      'Built a Context-Aware Query Service using RAG and LangChain for enterprise knowledge bases.',
      'Tuned retrieval and ranking to improve answer quality for domain-specific corpora.',
      'Integrated vector search and metadata filters for secure, multi-tenant content access.',
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    company: 'ScienceSoft',
    role: 'Senior AI & Full-Stack Engineer',
    title: 'Real-Time Analytics Dashboard',
    overview:
      'High-performance dashboard to visualize live user interaction data from multiple services with strict latency targets.',
    responsibilities: [
      'Delivered interactive visualizations in React.js and Redux for operations and product teams.',
      'Implemented backend APIs and caching layers to process millions of events with sub-200ms latency.',
      'Optimized rendering paths for large time-series datasets and high-cardinality breakdowns.',
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
  {
    company: 'ScienceSoft',
    role: 'Senior AI & Full-Stack Engineer',
    title: 'ML Document Intelligence & EKS Platform',
    overview:
      'ML-driven document analysis and containerized microservices on AWS EKS for high-volume, low-latency data workflows.',
    responsibilities: [
      'Architected ML-driven document analysis pipelines using Python and NLP for international clients.',
      'Engineered FastAPI and Node.js microservices for high-volume ingestion with sub-100ms latency on critical paths.',
      'Orchestrated Docker and Kubernetes on AWS EKS with automated scaling and self-healing for 99.9% uptime.',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'Node.js',
      'NLP',
      'Docker',
      'Kubernetes',
      'AWS EKS',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    company: 'IBM',
    role: 'Senior Full-Stack Engineer',
    title: 'Federated GraphQL API Gateway',
    overview:
      'Centralized GraphQL gateway unifying multiple enterprise microservices and reducing redundant frontend requests.',
    responsibilities: [
      'Led design of a federated GraphQL API gateway using Node.js to consolidate service boundaries.',
      'Reduced frontend request overhead by ~40% through schema stitching and batching strategies.',
      'Partnered with service teams on versioning, deprecation, and observability for production traffic.',
    ],
    techStack: ['Node.js', 'GraphQL', 'TypeScript', 'REST APIs', 'Redis', 'AWS'],
  },
  {
    company: 'IBM',
    role: 'Senior Full-Stack Engineer',
    title: 'Serverless SaaS Analytics Platform',
    overview:
      'Production web and analytics experiences for global SaaS users with event-driven backends on AWS.',
    responsibilities: [
      'Developed production platforms using React, TypeScript, and Redux with accessibility and responsive design.',
      'Implemented event-driven microservices on AWS Lambda for complex data ingestion workflows.',
      'Established GitHub Actions CI/CD with linting and unit tests for consistent release quality.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Redux',
      'AWS Lambda',
      'Node.js',
      'GitHub Actions',
      'AWS',
    ],
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer II',
    title: 'Azure Microservices & Infrastructure APIs',
    overview:
      'Distributed C# and .NET Core services on Azure supporting internal infrastructure and developer tooling.',
    responsibilities: [
      'Developed distributed backend services in C# and .NET Core in Azure for thousands of internal users.',
      'Architected REST APIs integrated with Azure SQL and Service Bus to streamline infrastructure management.',
      'Optimized database performance via indexing and stored procedure refactors, cutting high-latency queries by 45%.',
    ],
    techStack: ['C#', '.NET Core', 'Azure', 'Azure SQL', 'Service Bus', 'REST APIs'],
  },
  {
    company: 'TechSolutions Inc',
    role: 'Full-Stack Engineer',
    title: 'Full-Stack Web Platform & Caching Layer',
    overview:
      'End-to-end React and Node.js applications with PostgreSQL and Redis-backed performance improvements.',
    responsibilities: [
      'Built full-stack web applications from database design through deployment.',
      'Optimized PostgreSQL and added Redis caching to improve page load speed by 50%.',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Express', 'REST APIs'],
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
