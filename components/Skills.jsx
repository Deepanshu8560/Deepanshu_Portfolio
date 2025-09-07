'use client';

import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Cloud, Palette } from 'lucide-react';

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Java', 'Python', 'REST APIs', 'Microservices'],
      color: 'from-green-500 to-blue-500',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Prisma'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify', 'GitHub Actions'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="text-white">{category.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
