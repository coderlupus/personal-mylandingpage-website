
import React from "react";

const DetailsSection = () => {
  const curriculum = [
    {
      category: "Desenvolvimento de Software",
      icon: (
        <svg className="w-5 h-5 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      subjects: [
        { name: "Algoritmos e Lógica de Programação", status: "completed" },
        { name: "Programação", status: "completed" },
        { name: "Programação Orientada a Objetos I", status: "completed" },
        { name: "Estrutura de Dados", status: "completed" },
        { name: "Programação Web", status: "completed" },
        { name: "Banco de Dados", status: "completed" },
        { name: "Programação Orientada a Objetos II", status: "future" },
        { name: "Projeto e Adm. de Banco de Dados", status: "future" },
        { name: "Programação Visual", status: "future" },
      ]
    },
    {
      category: "Engenharia & Infraestrutura",
      icon: (
        <svg className="w-5 h-5 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subjects: [
        { name: "Introdução à Informática", status: "completed" },
        { name: "Teoria Geral dos Sistemas", status: "completed" },
        { name: "Fundamentos de Sistemas de Info.", status: "completed" },
        { name: "Arquitetura de Computadores", status: "completed" },
        { name: "Engenharia de Software I", status: "completed" },
        { name: "Sistemas Operacionais", status: "future" },
        { name: "Engenharia de Software II", status: "future" },
        { name: "Redes de Computadores", status: "future" },
        { name: "Gestão de Projeto de Software", status: "future" },
        { name: "Sistemas de Apoio à Decisão", status: "future" },
      ]
    },
    {
      category: "Matemática & Fundamentos",
      icon: (
        <svg className="w-5 h-5 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      subjects: [
        { name: "Fundamentos de Matemática", status: "completed" },
        { name: "Lógica", status: "completed" },
        { name: "Cálculo Diferencial e Integral", status: "completed" },
        { name: "Álgebra Linear", status: "completed" },
        { name: "Probabilidade e Estatística", status: "completed" },
        { name: "Matemática Financeira", status: "future" },
      ]
    },
    {
      category: "Gestão, Humanas & Prática",
      icon: (
        <svg className="w-5 h-5 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      subjects: [
        { name: "Teoria Geral da Administração", status: "completed" },
        { name: "Metodologia Científica", status: "completed" },
        { name: "Leitura e Produção de Texto", status: "completed" },
        { name: "Org., Sistemas e Métodos", status: "completed" },
        { name: "Inglês Técnico", status: "completed" },
        { name: "Empreendedorismo em TI", status: "future" },
        { name: "Contabilidade e Custos", status: "future" },
        { name: "Ética / Direito / Filosofia", status: "future" },
        { name: "Estágio & TCC", status: "future" },
      ]
    }
  ];

  return <section className="w-full bg-white py-0">
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Left Card - Formação Acadêmica */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
          {/* Card Header with background image instead of gradient */}
          <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
              Formação Acadêmica
            </h2>
          </div>

          {/* Card Content */}
          <div className="bg-white p-6 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
            {/* Header Info */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sistemas de Informação</h3>
              <p className="text-pulse-600 font-medium text-lg mb-4">Universidade Federal do Rio Grande do Norte (UFRN)</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Início: Fev 2024</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  <span>Previsão: Fev 2028</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <span>Bacharelado</span>
                </div>
              </div>
            </div>

            {/* Curriculum Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculum.map((section, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 pb-3 border-b border-gray-100">
                    <div className="p-1.5 bg-pulse-50 rounded-lg">
                      {section.icon}
                    </div>
                    {section.category}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.subjects.map((subject, subIdx) => (
                      <li key={subIdx} className="text-sm text-gray-600 flex items-start gap-2.5">
                        {subject.status === 'completed' ? (
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                          </div>
                        )}
                        <span className={subject.status === 'completed' ? 'text-gray-700 font-medium' : 'text-gray-500'}>
                          {subject.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center sm:justify-end text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span>Disciplinas Cursadas/Em Curso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-1"></div>
                <span>A Cursar</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default DetailsSection;
