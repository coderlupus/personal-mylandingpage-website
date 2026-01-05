import React, { useRef } from "react";

interface ExperienceProps {
  content: string;
  author: string;
  role: string;
  period: string;
  backgroundImage?: string;
}

const experiences: ExperienceProps[] = [{
  content: "Gerenciei estoque, organizei pedidos, realizei atendimento ao cliente, identifiquei tendências de mercado e negociei com fornecedores. Controlei finanças e desenvolvi estratégias para aumentar vendas.",
  author: "SILTHAN SPORTS",
  role: "Fundador e CEO",
  period: "Mar/2023 – Out/2023",
  backgroundImage: "/background-section1.png"
}, {
  content: "Planejo e executo projetos personalizados, crio listas de prospecção, realizo contatos ativos, conduzo reuniões e proponho soluções. Analiso o cenário do cliente e desenvolvo estratégias.",
  author: "F1 RISING",
  role: "Fundador e CEO",
  period: "Dez/2024 – Presente",
  backgroundImage: "/background-section2.png"
}, {
  content: "Auxiliar no laboratório de informática de uma escola, oferecendo suporte técnico, manutenção de equipamentos e apoio aos alunos com tecnologia educacional.",
  author: "Laboratório de Informática",
  role: "Auxiliar Técnico",
  period: "Atual",
  backgroundImage: "/background-section3.png"
}, {
  content: "Participação ativa há vários anos, contribuindo para o desenvolvimento de jovens líderes e participando de iniciativas comunitárias e do Rotary.",
  author: "Ordem DeMolay & Rotary",
  role: "Membro Voluntário",
  period: "Vários anos",
  backgroundImage: "/background-section1.png"
}];

const ExperienceCard = ({
  content,
  author,
  role,
  period,
  backgroundImage = "/background-section1.png"
}: ExperienceProps) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >


      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{content}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
          <p className="text-white/60 text-sm mt-1">{period}</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50 relative" id="experience" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">5</span>
            <span>Experiências</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-12 text-left">Experiência Profissional</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              content={experience.content}
              author={experience.author}
              role={experience.role}
              period={experience.period}
              backgroundImage={experience.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;