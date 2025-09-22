'use client';

import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Deepanshu_gupta_resume.pdf';
    link.download = 'Deepanshu_gupta_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-85 h-85 pb-30 mb-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src="./my-image.jpg"
                      alt="John Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-pulse animation-delay-4000"></div>
              </div>
            </div>

            {/* Introduction Side */}
            <div className="lg:pl-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello! I'm Deepanshu Gupta
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am Deepanshu Gupta, a B.Tech graduate in Computer Science and Engineering from Alliance University, with a deep passion for software engineering and AI/ML. From classrooms to late-night coding sessions, my curiosity has always pushed me to create impactful solutions and explore the cutting edge of technology.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  During my undergraduate years, I built projects like a House Price Predictor, a Stock Forecasting tool using LSTM, and an AI-driven Movie Recommender System. These experiences not only sharpened my technical skills but also strengthened my ability to transform theory into practical applications.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      100+
                    </div>
                    <div className="text-gray-400 text-sm">Code Commits</div>
                  </div>
                  
                </div>

                {/* Resume Download Button */}
                <div className="pt-4">
                  <button
                    onClick={handleDownloadResume}
                    className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    <span className="font-medium">Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
