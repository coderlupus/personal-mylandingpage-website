import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Code2, Database, Layout, Users, Brain, Rocket, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300 transform hover:-translate-y-1"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const hardSkills = [
    {
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Linguagens & Ecossistema",
      description: "Vivência acadêmica e prática com Python, C, Java, JavaScript/TypeScript e Dart. Uso cotidiano de VS Code e Git."
    },
    {
      icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Front-end & Mobile",
      description: "Construção de interfaces com React, Vue e Flutter. Prototipagem básica utilizando Figma, Canva e Affinity."
    },
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Back-end & Dados",
      description: "Experiência com Spring, MySQL, PostgreSQL e Firebase. Contato com Docker."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Temas de Interesse",
      description: "Estudos introdutórios em Cibersegurança, Inteligência Artificial e Automação. Participação em eventos como GO!RN."
    }
  ];

  const softSkills = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Liderança & Gestão",
      description: "Gestão de projetos e liderança na ordem DeMolay. Organização, planejamento e visão estratégica."
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Inteligência Estratégica",
      description: "Adaptabilidade, resiliência e pensamento crítico. Capacidade de tomar decisões sob pressão e aprendizado autônomo."
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Colaboração & Comunicação",
      description: "Empatia, escuta ativa e negociação. Trabalho em equipe com foco em resolução de conflitos e inovação."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="skills" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Competências</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Vivências &<br className="hidden sm:block" /> Aprendizados
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Um resumo das tecnologias com as quais já tive contato e tenho interesse, além das habilidades comportamentais que guiam minha jornada.
          </p>
        </div>

        {/* Hard Skills Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 opacity-0 fade-in-element">
            <span className="w-2 h-8 bg-pulse-500 rounded-full inline-block"></span>
            Tech & Ferramentas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {hardSkills.map((skill, index) => (
              <FeatureCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 opacity-0 fade-in-element delay-300">
            <span className="w-2 h-8 bg-green-500 rounded-full inline-block"></span>
            Soft Skills & Liderança
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {softSkills.map((skill, index) => (
              <FeatureCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                index={index + 4} // Offset
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
