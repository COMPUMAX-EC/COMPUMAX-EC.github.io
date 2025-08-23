'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: 'web' | 'mobile' | 'tool'
  image?: string
}

interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'tool'
}

interface Community {
  id: number
  name: string
  description: string
  role: string
  logo: string
  website?: string
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
    github?: string
  }
  roleColor: string
  hoverColor: string
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'tool'>('all')

  // Proyectos destacados
  const projects: Project[] = [
    {
      id: 1,
      title: "CTT Platform",
      description: "Plataforma completa de e-commerce con gestión de inventario",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://ctt-platform.demo.com",
      githubUrl: "https://github.com/geobas",
      category: "web",
      image: "/assets/projects/ctt.png"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real",
      technologies: ["Vue.js", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/geobas",
      liveUrl: "https://tasks.demo.com",
      category: "web",
      image: "/assets/projects/task-manager.svg"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard analítico con visualizaciones interactivas y reportes",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
      githubUrl: "https://github.com/geobas",
      liveUrl: "https://analytics.demo.com",
      category: "web",
      image: "/assets/projects/analytics-dashboard.svg"
    },
    {
      id: 4,
      title: "API Gateway",
      description: "Gateway de APIs escalable con autenticación y rate limiting",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      githubUrl: "https://github.com/geobas",
      category: "tool",
      image: "/assets/projects/api-gateway.svg"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Aplicación de chat en tiempo real con Socket.io",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/geobas",
      liveUrl: "https://chat.demo.com",
      category: "web",
      image: "/assets/projects/chat-app.svg"
    },
    {
      id: 6,
      title: "DevOps Toolkit",
      description: "Herramientas de automatización para desarrollo y despliegue",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      githubUrl: "https://github.com/geobas",
      category: "tool",
      image: "/assets/projects/devops-toolkit.svg"
    }
  ]

  // Habilidades técnicas
  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 95, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Vue.js", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "Java", level: 75, category: "backend" },
    { name: "Express.js", level: 90, category: "backend" },
    { name: "Django", level: 80, category: "backend" },
    
    // Databases
    { name: "PostgreSQL", level: 85, category: "database" },
    { name: "MongoDB", level: 80, category: "database" },
    { name: "MySQL", level: 85, category: "database" },
    { name: "Redis", level: 75, category: "database" },
    
    // Tools
    { name: "Git", level: 95, category: "tool" },
    { name: "Docker", level: 85, category: "tool" },
    { name: "AWS", level: 70, category: "tool" }
  ]

  // Comunidades y empresas
  const communities: Community[] = [
    {
      id: 1,
      name: "Agencia de Diseño y Publicidad Compumax",
      description: "Empresa tecnológica especializada en soluciones digitales y desarrollo de software",
      role: "Fundador & CEO",
      logo: "/assets/communities/compumax.jpg",
      website: "https://compumax.ec",
      socialMedia: {
        facebook: "https://www.facebook.com/AgenciaCompumax",
        instagram: "https://instagram.com/compumax",
        linkedin: "https://linkedin.com/company/compumax"
      },
      roleColor: "blue",
      hoverColor: "blue-300"
    },
    {
      id: 2,
      name: "DevCommunity EC",
      description: "Comunidad de desarrolladores de Ecuador enfocada en compartir conocimiento y buenas prácticas",
      role: "Promotor Activo",
      logo: "/assets/communities/devcommunity-logo.svg",
      socialMedia: {
        facebook: "https://facebook.com/devcommunityec",
        instagram: "https://instagram.com/devcommunityec",
        github: "https://github.com/devcommunityec"
      },
      roleColor: "green",
      hoverColor: "green-300"
    },
    {
      id: 3,
      name: "Open Source Contributor",
      description: "Contribuidor activo en proyectos de código abierto y mantenedor de librerías comunitarias",
      role: "Colaborador",
      logo: "/assets/communities/opensource-logo.svg",
      socialMedia: {
        github: "https://github.com/geobas",
        linkedin: "https://linkedin.com/in/geovanny-basantes"
      },
      roleColor: "purple",
      hoverColor: "purple-300"
    },
    {
      id: 4,
      name: "Startup Ecosystem",
      description: "Mentor y asesor en el ecosistema de startups tecnológicas de Ecuador",
      role: "Mentor",
      logo: "/assets/communities/startup-logo.svg",
      socialMedia: {
        linkedin: "https://linkedin.com/in/geovanny-basantes",
        twitter: "https://twitter.com/geobas"
      },
      roleColor: "orange",
      hoverColor: "orange-300"
    },
    {
      id: 5,
      name: "Tech Education",
      description: "Instructor y creador de contenido educativo en tecnologías modernas de desarrollo",
      role: "Instructor",
      logo: "/assets/communities/education-logo.svg",
      socialMedia: {
        linkedin: "https://linkedin.com/in/geovanny-basantes",
        instagram: "https://instagram.com/geobas.tech"
      },
      roleColor: "indigo",
      hoverColor: "indigo-300"
    },
    {
      id: 6,
      name: "Innovation Hub",
      description: "Miembro activo de hubs de innovación y aceleradoras de tecnología en la región",
      role: "Miembro Activo",
      logo: "/assets/communities/innovation-logo.svg",
      socialMedia: {
        linkedin: "https://linkedin.com/in/geovanny-basantes",
        facebook: "https://facebook.com/innovationhubec"
      },
      roleColor: "pink",
      hoverColor: "pink-300"
    }
  ]

  // Filtrar proyectos
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <>
      {/* CSS personalizado para animaciones y tipografía */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
        
        .font-display {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          letter-spacing: -0.05em;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          line-height: 1.6;
        }
        
        .font-medium {
          font-weight: 500;
        }
        
        .font-semibold {
          font-weight: 600;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8);
          }
        }
        
        @keyframes backgroundFloat {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-background-float {
          animation: backgroundFloat 8s ease-in-out infinite;
        }
        
        .animate-particle-float {
          animation: particleFloat 6s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Efectos de fondo animados - Movidos desde la imagen */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Glow effects principales */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-background-float"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-3xl opacity-25 animate-background-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-purple-600 via-pink-600 to-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          
          {/* Partículas flotantes distribuidas por toda la pantalla */}
          <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-purple-400 rounded-full animate-particle-float opacity-60"></div>
          <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-particle-float animation-delay-300 opacity-50"></div>
          <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-blue-400 rounded-full animate-particle-float animation-delay-600 opacity-40"></div>
          <div className="absolute top-[60%] right-[15%] w-2.5 h-2.5 bg-cyan-400 rounded-full animate-particle-float animation-delay-1000 opacity-70"></div>
          <div className="absolute top-[75%] left-[25%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-particle-float animation-delay-1500 opacity-55"></div>
          <div className="absolute top-[85%] right-[30%] w-1 h-1 bg-pink-300 rounded-full animate-particle-float animation-delay-200 opacity-45"></div>
          <div className="absolute top-[35%] right-[50%] w-2 h-2 bg-blue-300 rounded-full animate-particle-float animation-delay-500 opacity-65"></div>
          <div className="absolute top-[55%] left-[40%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-particle-float animation-delay-1200 opacity-50"></div>
          
          {/* Anillos concéntricos animados de fondo */}
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] border border-purple-400/20 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] border border-pink-400/15 rounded-full animate-ping opacity-20 animation-delay-500"></div>
          <div className="absolute top-2/3 right-1/3 w-[500px] h-[500px] border border-blue-400/25 rounded-full animate-ping opacity-25 animation-delay-1000"></div>
          
          {/* Efectos de brillo que se mueven */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-background-float opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-blue-900/10 animate-pulse"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-display text-white animate-glow">
                  GB<span className="text-purple-400">.</span>
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-8">
                  <a
                    href="#home"
                    className="text-white hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 font-body flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Inicio
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 font-body flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Habilidades
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 font-body flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Proyectos
                  </a>
                  <a
                    href="#communities"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 font-body flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Comunidades
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 font-body flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contacto
                  </a>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 px-3 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 font-body flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pt-16 z-10">
          <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen - Lado Izquierdo - SIN efectos animados */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] group cursor-pointer">
                  {/* Contenedor simple de la imagen */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover:border-white/40 transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-purple-500/50 group-hover:shadow-3xl">
                    <Image
                      src="/assets/Geovanny.png"
                      alt="Geovanny Basantes"
                      width={1280}
                      height={1280}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      priority
                      quality={100}
                    />
                    
                    {/* Solo overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Información - Lado Derecho */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-display text-white mb-6 animate-fadeInUp tracking-tight">
                  Geovanny 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-glow">
                    Basantes
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 animate-fadeInUp animation-delay-200 font-body font-medium">
                  Full Stack Developer & Software Engineer
                </h2>
                
                <p className="text-lg text-gray-400 mb-8 max-w-2xl animate-fadeInUp animation-delay-400 font-body leading-relaxed">
                  Especializado en crear aplicaciones web modernas y escalables usando las últimas tecnologías. 
                  Apasionado por el código limpio y las mejores prácticas de desarrollo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-500">
                  <a
                    href="#projects"
                    className="group px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 font-body"
                  >
                    Ver Proyectos
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 ml-2">→</span>
                  </a>
                  <a
                    href="#contact"
                    className="group px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold hover:-translate-y-1 hover:shadow-lg font-body flex items-center justify-center gap-2"
                  >
                    Contactar
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-slate-800/50 relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-white mb-4 animate-fadeInUp tracking-tight flex items-center justify-center gap-3">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Habilidades Técnicas
              </h2>
              <p className="text-gray-400 text-lg animate-fadeInUp animation-delay-200 font-body">
                Tecnologías y herramientas que domino
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['frontend', 'backend', 'database', 'tool'].map((category, categoryIndex) => (
                <div 
                  key={category} 
                  className="group bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/50 hover:border-purple-500/50 hover:bg-slate-700/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer animate-fadeInUp relative"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 capitalize group-hover:text-purple-300 transition-colors duration-300 font-body flex items-center gap-3">
                    {category === 'frontend' && (
                      <>
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                        Frontend
                      </>
                    )}
                    {category === 'backend' && (
                      <>
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        Backend
                      </>
                    )}
                    {category === 'database' && (
                      <>
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Base de Datos
                      </>
                    )}
                    {category === 'tool' && (
                      <>
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Herramientas
                      </>
                    )}
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200 font-body font-medium">{skill.name}</span>
                          <span className="text-purple-400 group-hover/skill:text-purple-300 transition-colors duration-200 font-body font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 group-hover/skill:from-purple-400 group-hover/skill:to-blue-400 group-hover/skill:shadow-lg group-hover/skill:shadow-purple-500/50"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-white mb-4 animate-fadeInUp tracking-tight flex items-center justify-center gap-3">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Mis Proyectos
              </h2>
              <p className="text-gray-400 text-lg mb-8 animate-fadeInUp animation-delay-200 font-body">
                Algunos de los proyectos en los que he trabajado
              </p>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-400">
                {(['all', 'web', 'mobile', 'tool'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`group px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden font-body ${
                      activeFilter === filter
                        ? 'bg-purple-600 text-white shadow-purple-500/30 shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {filter === 'all' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Todos
                      </>
                    )}
                    {filter === 'web' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Web Apps
                      </>
                    )}
                    {filter === 'mobile' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                        </svg>
                        Mobile
                      </>
                    )}
                    {filter === 'tool' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Herramientas
                      </>
                    )}
                    
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer animate-fadeInUp relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-white text-lg font-semibold z-10 group-hover:scale-110 transition-transform duration-300">
                        {project.title}
                      </div>
                    )}
                    
                    {/* Efecto de overlay animado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Efecto de brillo que se mueve */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 font-body">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors duration-300 font-body leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-purple-300 text-xs rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 hover:scale-110 font-body font-medium"
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group/link font-body font-medium"
                        >
                          <svg className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group/link font-body font-medium"
                        >
                          <svg className="w-4 h-4 group-hover/link:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Indicador de interactividad */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communities & Companies Section */}
        <section id="communities" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Header */}
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Comunidades & Empresas
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body leading-relaxed">
                Organizaciones de las que soy promotor, colaborador o miembro activo, contribuyendo al crecimiento tecnológico y empresarial
              </p>
            </div>

            {/* Communities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Compumax */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-6 rounded-2xl backdrop-blur-sm hover:from-slate-700/60 hover:to-slate-600/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp animation-delay-100 border border-slate-600/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg bg-white/10 backdrop-blur-sm">
                    <Image
                      src="/assets/communities/compumax.jpg"
                      alt="Compumax Logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display text-center group-hover:text-blue-300 transition-colors duration-300">Agencia de Diseño y Publicidad Compumax</h3>
                <p className="text-gray-400 mb-4 font-body text-center leading-relaxed">Empresa tecnológica especializada en soluciones digitales y desarrollo de software</p>
                
                {/* Role Badge */}
                <div className="flex items-center justify-center mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fundador & CEO
                  </span>
                </div>

                {/* Social Media Buttons */}
                <div className="flex justify-center gap-2 flex-wrap">
                  <a
                    href="https://compumax.ec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-1 px-2 py-1.5 bg-gray-600/50 hover:bg-gray-500/70 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs font-medium"
                  >
                    <svg className="w-3 h-3 group-hover/social:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    Web
                  </a>
                  
                  <a
                    href="https://facebook.com/compumax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-1 px-2 py-1.5 bg-blue-600/50 hover:bg-blue-500/70 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs font-medium"
                  >
                    <svg className="w-3 h-3 group-hover/social:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  
                  <a
                    href="https://instagram.com/compumax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-1 px-2 py-1.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 hover:from-purple-400/70 hover:to-pink-400/70 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs font-medium"
                  >
                    <svg className="w-3 h-3 group-hover/social:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  </div>
              </div>

              {/* Tech Community */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-6 rounded-2xl backdrop-blur-sm hover:from-slate-700/60 hover:to-slate-600/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp animation-delay-200 border border-slate-600/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg bg-white/10 backdrop-blur-sm">
                    <Image
                      src="/assets/communities/devclub.jpg"
                      alt="DevCluv UPEC"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display text-center group-hover:text-green-300 transition-colors duration-300">DevCommunity UPEC</h3>
                <p className="text-gray-400 mb-4 font-body text-center leading-relaxed">Comunidad de desarrolladores de Ecuador enfocada en compartir conocimiento y buenas prácticas</p>
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30 mb-4">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Promotor Activo
                  </span>
                </div>
                 <div className="flex justify-center gap-2 flex-wrap">  
                  <a
                    href="https://www.instagram.com/ieee_upec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-1 px-2 py-1.5 bg-blue-700/50 hover:bg-blue-600/70 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs font-medium"
                  >
                    <svg className="w-3 h-3 group-hover/social:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Open Source */}
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-6 rounded-2xl backdrop-blur-sm hover:from-slate-700/60 hover:to-slate-600/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp animation-delay-300 border border-slate-600/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg bg-white/10 backdrop-blur-sm">
                    <Image
                      src="/assets/communities/ieee.png"
                      alt="Open Source Logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display text-center group-hover:text-purple-300 transition-colors duration-300">IEEE Student Branch UPEC</h3>
                <p className="text-gray-400 mb-4 font-body text-center leading-relaxed">Organizador y contribuidor activo en proyectos de desarrollo de software y divulgación tecnológica.</p>
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Promotor Activo
                  </span>
                </div>
                <div className="flex justify-center gap-2 flex-wrap">  
                  <a
                    href="https://www.instagram.com/ieee_upec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-1 px-2 py-1.5 bg-blue-700/50 hover:bg-blue-600/70 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs font-medium"
                  >
                    <svg className="w-3 h-3 group-hover/social:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

             
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fadeInUp animation-delay-700">
              <p className="text-lg text-gray-400 mb-8 font-body max-w-2xl mx-auto">
                Creo firmemente en el poder de la colaboración y el trabajo en equipo para impulsar la innovación tecnológica.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 font-body"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Colaboremos Juntos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800/50 relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <h2 className="text-4xl font-display text-white mb-4 animate-fadeInUp tracking-tight flex items-center justify-center gap-3">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-400 text-lg mb-8 animate-fadeInUp animation-delay-200 font-body">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Email */}
              <div className="group bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp animation-delay-300">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 font-body text-center">Email</h3>
                <p className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300 font-body text-center">geobas@email.com</p>
              </div>
              
              {/* LinkedIn */}
              <div className="group bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp animation-delay-400">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 font-body text-center">LinkedIn</h3>
                <p className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300 font-body text-center">linkedin.com/in/geobas</p>
              </div>
              
              {/* GitHub */}
              <div className="group bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp animation-delay-500">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 font-body text-center">GitHub</h3>
                <p className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300 font-body text-center">github.com/geobas</p>
              </div>
            </div>
            
            <a
              href="mailto:geobas@email.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 animate-fadeInUp animation-delay-600 font-body"
            >
              ¡Charlemos!
              <span className="group-hover:translate-x-1 transition-transform duration-300">💬</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-slate-900 border-t border-slate-700 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center relative">
            <p className="text-gray-400 animate-fadeInUp font-body">
              © 2024 Geovanny Basantes. Desarrollado con ❤️ y Next.js
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
