'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  icon: string
  iconUrl?: string
}

const skillCategories: { title: string; color: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'C#', icon: 'csharp' },
      { name: 'PHP', icon: 'php' },
      { name: 'SQL', icon: 'mysql' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
    ],
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Redux', icon: 'redux' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Flask', icon: 'flask' },
      { name: '.NET Core', icon: 'dotnet' },
      { name: 'jQuery', icon: 'jquery' },
      {
        name: 'LangChain',
        icon: 'langchain',
        iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C',
      },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI & Data Science',
    skills: [
      { name: 'Machine Learning', icon: 'tensorflow' },
      { name: 'NLP', icon: 'python' },
      { name: 'RAG', icon: 'openai' },
      { name: 'FAISS', icon: 'numpy' },
      { name: 'Data Pipelines', icon: 'kafka' },
    ],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Terraform', icon: 'terraform' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' },
      {
        name: 'Microsoft SQL Server',
        icon: 'mysql',
        iconUrl: 'https://cdn.simpleicons.org/microsoftsqlserver/CC2927',
      },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Database Design', icon: 'sqlite' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3
                  className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center text-center gap-2 px-3 py-3 text-slate-700"
                    >
                      <img
                        src={skill.iconUrl ?? `https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                      <span className="text-sm font-medium leading-tight">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
