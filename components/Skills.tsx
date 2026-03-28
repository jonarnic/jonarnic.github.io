'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  icon: string
  iconUrl?: string
}

const skillCategories: { title: string; color: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: 'react' },
      { name: 'Swift (iOS)', icon: 'swift' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Python (FastAPI, Django)', icon: 'python' },
      { name: 'Ruby on Rails', icon: 'rails' },
      { name: 'Go', icon: 'go' },
      { name: 'Java', icon: 'java' },
    ],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Microservices Architecture', icon: 'kubernetes' },
      { name: 'REST APIs', icon: 'postman' },
      { name: 'CI/CD', icon: 'githubactions' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'DynamoDB', icon: 'dynamodb' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'LLM Integration', icon: 'ai' },
      { name: 'AI Workflow Automation', icon: 'tensorflow' },
      {
        name: 'n8n',
        icon: 'n8n',
        iconUrl: 'https://cdn.simpleicons.org/n8n/ea4b71',
      },
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
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills</h2>
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


