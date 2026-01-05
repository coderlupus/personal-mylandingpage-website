
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  href?: string;
}

const projects: TestimonialProps[] = [{
  content: "Site institucional profissional desenvolvido com foco em performance e conversão, com design minimalista e responsivo.",
  author: "Stay Salmar",
  role: "Website Comercial",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png",
  href: "https://www.staysalmar.com/"
}, {
  content: "Portfólio interativo para profissional da saúde, integrando blog e sistema de agendamento em uma interface acolhedora.",
  author: "Nutri Patrícia Monteiro",
  role: "Landing page",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png",
  href: "https://nutripatriciamonteiro.vercel.app"
}, {
  content: "Sistema completo de gestão financeira com dashboards, relatórios e controle de fluxo de caixa, desenvolvido com React e Node.js.",
  author: "SIG Finance",
  role: "Sistema Web",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png",
  href: "https://github.com/oguiaraujo/SIG-Finance"
}, {
  content: "Integração front-end com a API do Rick and Morty, explorando paginação, filtros e animações em uma interface divertida.",
  author: "Rick and Morty API",
  role: "Integração API",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png",
  href: "https://github.com/coderlupus/personal-rick-and-morty-api"
}];

const ProjectCard = ({
  content,
  author,
  role,
  gradient,
  backgroundImage = "/background-section1.png",
  href = "#"
}: TestimonialProps) => {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      rel={href.startsWith('http') ? "noopener noreferrer" : ""}
      className="block group h-full overflow-hidden rounded-lg relative shadow-lg"
    >
      <div
        className={`bg-cover bg-center h-full flex flex-col justify-between text-white p-8 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br ${gradient}`}
        style={{ backgroundImage: `url('${backgroundImage}')`, backgroundBlendMode: 'overlay' }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <p className="text-xl font-medium leading-relaxed pr-8 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
            {content}
          </p>

          <div className="flex items-end justify-between mt-8">
            <div>
              <h4 className="font-bold text-2xl mb-1 group-hover:text-pulse-200 transition-colors drop-shadow-md">{author}</h4>
              <p className="text-white/80 text-sm font-medium tracking-wide uppercase">{role}</p>
            </div>

            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-white relative" id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 relative z-10">
          <div>
            <div className="pulse-chip mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">4</span>
              <span>Projetos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Principais Projetos
            </h2>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors py-2 border-b border-transparent hover:border-gray-900 relative z-20 cursor-pointer"
          >
            <span className="font-medium text-sm tracking-wide">VER TODOS OS PROJETOS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, index) => (
            <div key={index} className="h-[400px]">
              <ProjectCard
                content={project.content}
                author={project.author}
                role={project.role}
                gradient={project.gradient}
                backgroundImage={project.backgroundImage}
                href={project.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
