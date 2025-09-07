'use client';

import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, GithubIcon } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Ai-Finance Platform',
      description: 'An intelligent solution that leverages AI to simplify financial management, automate insights, and empower smarter investment decisions.',
      image: './project-1.png',
      technologies: ['React', 'Node.js', 'Postgesql', 'Next.js', 'Generative Ai'],
      liveUrl: 'https://financebot-two.vercel.app/',
      githubUrl: 'https://github.com/Deepanshu8560/Financebot',
      featured: true,
    },
    {
      title: 'Ai Career Coach',
      description: 'An intelligent platform that guides users with personalized career insights, skill recommendations, and industry trends powered by AI.',
      image: './project-2.png',
      technologies: ['Next.js', 'PostgreSQL', 'React.js', 'Tailwind', 'JavaScript', 'Generative Ai'],
      liveUrl: 'https://coachify-seven.vercel.app/',
      githubUrl: 'https://github.com/Deepanshu8560/Coachify',
      featured: true,
    },
    {
      title: 'E-pharmacy Store',
      description: 'A convenient online pharmacy platform that delivers medicines and healthcare products to your doorstep with ease and reliability.',
      image: './project-3.png',
      technologies: ['JSP', 'HTML', 'CSS', 'JavaScript', 'Java Servlets', 'Apache Tomcat', 'MySQL'],
      liveUrl: '/',
      githubUrl: 'https://github.com/Deepanshu8560/Online_E-Pharmacy_System/tree/master',
      featured: false,
    },
    {
      title: 'Equity Research Analysis using LLM',
      description: 'Mobile-first social platform with real-time messaging, content sharing, and community features.',
      image: './project-4.png',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-black">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                  project.featured ? 'lg:row-span-1' : ''
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay with buttons - only visible on image hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 transform translate-y-4 hover:translate-y-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform translate-y-4 hover:translate-y-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span className="font-medium">Code</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}