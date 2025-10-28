import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://portfolio-frontend-five-plum.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Vertx",
      location: "Remote",
      duration: "January 2025 - September 2025",
      responsibilities: [
        "Led cross-functional team of 5 developers (2 AI specialists, 3 MERN stack developers) for product development",
        "Integrated AI capabilities with MERN stack architecture for enhanced user experience",
        "Developed key features including Pitch Analysis and Mock Pitching AI models"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI Integration"]
    },
    {
      title: "Software Development Intern",
      company: "Distacart",
      location: "Hyderabad, India",
      duration: "January 2025 - March 2025",
      responsibilities: [
        "Customized Shopify Liquid themes and improved site performance",
        "Implemented SEO optimizations for better search visibility"
      ],
      technologies: ["Shopify Liquid", "JavaScript", "CSS"]
    },
    {
      title: "Software Development Intern",
      company: "ServzPe",
      location: "Remote",
      duration: "April 2024 - September 2024",
      responsibilities: [
        "Built marketplace platform using React.js, Node.js, Express.js, and MongoDB",
        "Implemented user authentication and subscription gateway",
        "Designed RESTful APIs for frontend-backend communication"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"]
    }
  ];

  const projects = [
    {
      name: "Vertx Start - Investor Matching Platform",
      description: "Developed full-stack platform connecting founders with investors through intelligent co-founder matching algorithms. Implemented startup financial tools including equity cap table calculations, valuation models, and convertible notes management.",
      technologies: ["React", "Node.js", "MongoDB", "Real-time Chat"],
      github: "https://github.com/Prakash9019/VERTX_FE",
      live: "https://app.govertx.com"
    },
    {
      name: "GeoInsight - Public Service Platform",
      description: "Built platform addressing public service challenges with Google Maps API integration. Implemented real-time problem reporting and admin dashboard for issue tracking.",
      technologies: ["React Native", "Express.js", "Node.js", "MongoDB", "Google Maps API"],
      github: "https://github.com/Prakash9019/AquaLink"
    },
    {
      name: "Architecture Website",
      description: "Developed responsive interior design company website with modern UI/UX. Implemented interactive galleries and contact forms with mobile-first approach.",
      technologies: ["ReactJS", "CSS", "JavaScript"],
      github: "https://github.com/Prakash9019/Architecture_Site",
      live: "https://prakash9019.github.io/Architecture_Site"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative">
      {/* Mouse Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      ></div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 rounded-md bg-slate-800 text-teal-400 hover:bg-slate-700"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900 flex items-center justify-center">
          <nav className="flex flex-col space-y-8 text-center">
            {['about', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-lg uppercase tracking-widest transition-colors ${
                  activeSection === section ? 'text-teal-400' : 'text-slate-400 hover:text-teal-400'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="lg:flex relative">
        {/* Left Side - Fixed */}
        <div className="lg:fixed lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-between p-8 lg:p-24 relative z-10">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-3">
              Loka Surya Prakash Pentakota
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-slate-200 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg text-slate-400 max-w-md mb-8">
              I build accessible, pixel-perfect digital experiences for the web and mobile.
            </p>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex flex-col space-y-4 mb-16">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`flex items-center group text-sm uppercase tracking-widest transition-all ${
                    activeSection === section ? 'text-slate-200' : 'text-slate-400'
                  }`}
                >
                  <span
                    className={`mr-4 h-px transition-all ${
                      activeSection === section
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-400 group-hover:w-16 group-hover:bg-slate-200'
                    }`}
                  ></span>
                  <span className="group-hover:text-slate-200">{section}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-8 lg:mt-0">
            <a
              href="https://github.com/Prakash9019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/suryaprakashloka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:plsprakash2003@gmail.com"
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Scrollable */}
        <div className="lg:ml-[50%] lg:w-1/2 p-8 lg:p-24 relative z-10">
          {/* About Section */}
          <section id="about" className="mb-32 scroll-mt-16">
            <div className="lg:hidden mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Back in 2021, I decided to dive into the world of web development and discovered my passion
                for creating things that live on the internet. Fast-forward to today, and I've had the
                privilege of building software for{' '}
                <span className="text-slate-200 font-medium">startups</span>,{' '}
                <span className="text-slate-200 font-medium">e-commerce companies</span>, and{' '}
                <span className="text-slate-200 font-medium">digital agencies</span>.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences
                at <span className="text-teal-400 font-medium">Vertx</span> for a variety of clients. I
                most enjoy building software in the sweet spot where design and engineering meet — things
                that look good but are also built well under the hood.
              </p>
              <p>
                When I'm not at the computer, I'm usually solving competitive programming problems, exploring
                new technologies, or learning about AI and machine learning.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS', 'React-Native','Expo', 'Express.js'].map((tech) => (
                  <li key={tech} className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-32 scroll-mt-16">
            <div className="lg:hidden mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
            </div>
            <div className="space-y-12 group/list">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {job.duration}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {job.title} · {job.company}
                          </span>
                        </span>
                      </div>
                      <div className="text-slate-500 text-sm">{job.location}</div>
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm leading-normal">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-slate-400">
                          <span className="text-teal-400 mr-2">▹</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <li key={tech}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium leading-tight text-slate-200 group"
              >
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-400 group-hover:text-teal-400">
                  View Full Résumé
                </span>
                <ExternalLink size={16} className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-32 scroll-mt-16">
            <div className="lg:hidden mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
            </div>
            <div className="space-y-12 group/list">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-8">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          href={project.live || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{project.name}</span>
                          {project.live && (
                            <ExternalLink size={16} className="ml-2 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                          )}
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li key={tech}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center space-x-4 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-teal-400 transition-colors flex items-center"
                        >
                          <Github size={16} className="mr-1" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-teal-400 transition-colors flex items-center"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-32 scroll-mt-16">
            <div className="lg:hidden mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Get In Touch</h2>
            </div>
            <div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and my inbox is always open. Whether you have
                a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none transition"
                  ></textarea>
                </div>
                {formStatus.message && (
                  <div
                    className={`p-4 rounded-md ${
                      formStatus.type === 'success'
                        ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20'
                        : 'bg-red-400/10 text-red-400 border border-red-400/20'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-teal-400/10 text-teal-400 border border-teal-400 rounded-md font-medium hover:bg-teal-400/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="pb-16">
            <p className="text-sm text-slate-400">
              Built with <span className="text-teal-400">React</span> and{' '}
              <span className="text-teal-400">Tailwind CSS</span>
              {/* . Inspired by{' '}
              <a
                href="https://brittanychiang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-teal-400 transition-colors"
              >
                Brittany Chiang
              </a> */}
              .
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;