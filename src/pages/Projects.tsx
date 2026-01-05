
import React, { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
    title: string;
    category: string;
    description: string;
    link: string;
    type: "commercial" | "academic" | "personal";
}

const allProjects: Project[] = [
    // Commercial / Real World
    {
        title: "Stay SalMar",
        category: "Website Comercial",
        description: "Site institucional desenvolvido para a Stay SalMar, focado em experiência do usuário e conversão.",
        link: "https://www.staysalmar.com/",
        type: "commercial"
    },
    {
        title: "Nutri Patrícia Monteiro",
        category: "Website Profissional",
        description: "Portfólio e site de agendamento para nutricionista, com design limpo e responsivo.",
        link: "https://nutripatriciamonteiro.vercel.app",
        type: "commercial"
    },

    // Systems / Complex Apps
    {
        title: "SIG Finance",
        category: "Sistema de Gestão",
        description: "Sistema completo de gestão financeira desenvolvido em grupo.",
        link: "https://github.com/oguiaraujo/SIG-Finance",
        type: "academic"
    },
    {
        title: "SIG Beer",
        category: "Sistema de Gestão",
        description: "Sistema para gestão de cervejaria/distribuidora.",
        link: "https://github.com/SamuelMorais45/SIG-Beer",
        type: "academic"
    },
    {
        title: "Habits Tracker",
        category: "WebApp Produtividade",
        description: "Aplicação web para rastreamento de hábitos e produtividade pessoal.",
        link: "https://github.com/coderlupus/personal-habits-tracker-webapp",
        type: "personal"
    },

    // Integration / API
    {
        title: "Rick and Morty API",
        category: "Integração API",
        description: "Aplicação front-end consumindo a API do Rick and Morty para listar personagens e detalhes.",
        link: "https://github.com/coderlupus/personal-rick-and-morty-api",
        type: "personal"
    },
    {
        title: "AWS Infra Project",
        category: "Cloud & DevOps",
        description: "Projeto de infraestrutura utilizando serviços da AWS.",
        link: "https://github.com/coderlupus/personal-aws-project-infra",
        type: "personal"
    },

    // Websites
    {
        title: "Krooc Cookies",
        category: "E-commerce Front-end",
        description: "Interface moderna para uma loja de cookies.",
        link: "https://github.com/coderlupus/personal-krooc-cookies-website",
        type: "personal"
    },
    {
        title: "Sweet Sophia",
        category: "Website Institucional",
        description: "Site para confeitaria Sweet Sophia.",
        link: "https://github.com/coderlupus/personal-sweet-sophia-website",
        type: "personal"
    },
    {
        title: "Ravi Cookies",
        category: "Website Promocional",
        description: "Landing page para marca de cookies.",
        link: "https://github.com/coderlupus/personal-ravi-cookies-website",
        type: "personal"
    },

    // Others
    {
        title: "Animal Farm English",
        category: "Educacional",
        description: "Projeto acadêmico interdisciplinar envolvendo inglês e literatura.",
        link: "https://github.com/coderlupus/academic-animal-farm-english-website",
        type: "academic"
    },
    {
        title: "Research Ed Project",
        category: "Pesquisa & Educação",
        description: "Projeto de pesquisa educacional simulado.",
        link: "https://github.com/coderlupus/research-ed-project-sim",
        type: "academic"
    },
    {
        title: "PyCustomer",
        category: "Scripting / Python",
        description: "Ferramenta de gestão de clientes feita em Python.",
        link: "https://replit.com/@nathanlopes089/BSI-PyCustomer-Projeto",
        type: "personal"
    }
];

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link to="/#projects" className="inline-flex items-center text-gray-500 hover:text-pulse-600 transition-colors mb-8 group">
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Voltar para Projetos
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                                Arquivo de Projetos
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                Uma coleção completa de trabalhos comerciais, acadêmicos e projetos pessoais de desenvolvimento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Table Header (Hidden on Mobile) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500 border-b border-gray-200 pb-4 px-4">
                        <div className="col-span-1">Ano</div>
                        <div className="col-span-3">Projeto</div>
                        <div className="col-span-3">Categoria</div>
                        <div className="col-span-4">Descrição</div>
                        <div className="col-span-1 text-right">Link</div>
                    </div>

                    {/* Project Items */}
                    {allProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                        >
                            <div className="p-6 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                                {/* Mobile: Header */}
                                <div className="flex justify-between items-start md:hidden mb-4">
                                    <span className="text-sm font-mono text-pulse-500">2024</span>
                                    <ExternalLink className="w-5 h-5 text-gray-400" />
                                </div>

                                {/* Desktop: Year */}
                                <div className="hidden md:block col-span-1 text-sm font-mono text-gray-400 group-hover:text-pulse-500 transition-colors">
                                    2024
                                </div>

                                {/* Title */}
                                <div className="col-span-3 mb-2 md:mb-0">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-pulse-600 transition-colors flex items-center gap-2">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Category */}
                                <div className="col-span-3 mb-2 md:mb-0">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="col-span-4 text-gray-600 text-sm mb-4 md:mb-0 line-clamp-2 md:line-clamp-1">
                                    {project.description}
                                </div>

                                {/* Link Icon */}
                                <div className="col-span-1 hidden md:flex justify-end text-gray-400 group-hover:text-pulse-500 transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
