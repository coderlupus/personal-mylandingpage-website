
import React, { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface Project {
    title: string;
    category: string;
    description: string;
    link?: string;
    type: "commercial" | "academic" | "personal" | "extension";
    year: string;
}

const allProjects: Project[] = [
    // Commercial / Real World
    {
        title: "Stay Salmar",
        category: "Website Comercial",
        description: "Site institucional desenvolvido para a Stay Salmar, focado em experiência do usuário e conversão.",
        link: "https://www.staysalmar.com/",
        type: "commercial",
        year: "2025"
    },
    {
        title: "Nutri Patrícia Monteiro",
        category: "Website Profissional",
        description: "Landing page para nutricionista, com design limpo e responsivo.",
        link: "https://nutripatriciamonteiro.vercel.app",
        type: "commercial",
        year: "2026"
    },
    {
        title: "Sistema de agendamento - Clínica de Estética",
        category: "Sistema Fullstack",
        description: "Sistema de agendamento online para clínica de estética de sobrancelhas. Frontend React e Backend integrados.",
        link: "https://github.com/fundaoimd/projeto_es_frontend",
        type: "commercial",
        year: "2025"
    },
    {
        title: "Krooc Cookies",
        category: "E-commerce Front-end",
        description: "Interface moderna para uma loja de cookies.",
        link: "https://github.com/coderlupus/personal-krooc-cookies-website",
        type: "commercial",
        year: "2025"
    },
    {
        title: "Ravi Cookies",
        category: "Website Promocional",
        description: "Landing page para marca de cookies.",
        link: "https://github.com/coderlupus/personal-ravi-cookies-website",
        type: "commercial",
        year: "2025"
    },

    // Selected Extension Projects
    {
        title: "Plano de negócios e automação - Estética",
        category: "Extensão Universitária",
        description: "Plano de automação para empreendimento de estética.",
        link: "/documents/certificado-automacao-estetica.png",
        type: "extension",
        year: "2025"
    },
    {
        title: "Plano de Negócio - Automotivo",
        category: "Extensão Universitária",
        description: "Elaboração de plano de negócio para o ramo automotivo (TGA 01). 40 horas de atividades.",
        link: "/documents/certificado-plano-negocio-automotivo.png",
        type: "extension",
        year: "2024"
    },
    {
        title: "Plataforma Digital - Nordeste",
        category: "Extensão & Literatura",
        description: "Participação na escrita de livro e desenvolvimento de plataforma digital para obras relacionadas ao Nordeste e Sertão.",
        link: "/documents/livro-nordeste.pdf",
        type: "extension",
        year: "2025"
    }
];

const Projects = () => {
    const { t } = useTranslation();

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
                        {t('projects_page.back')}
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                                {t('projects_page.title')}
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                {t('projects_page.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Project Columns Header - Visible once for alignment context */}
                <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500 border-b border-gray-200 pb-4 px-4 mb-8">
                    <div className="col-span-1">{t('projects_page.table.year')}</div>
                    <div className="col-span-4">{t('projects_page.table.project')}</div>
                    <div className="col-span-6">{t('projects_page.table.desc')}</div>
                    <div className="col-span-1 text-right">{t('projects_page.table.link')}</div>
                </div>

                {/* Single List of Projects */}
                <div className="grid grid-cols-1 gap-6">
                    {allProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 ${project.link ? 'cursor-pointer' : ''}`}
                            onClick={() => project.link && window.open(project.link, '_blank')}
                        >
                            <div className="p-6 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                                {/* Mobile: Header */}
                                <div className="flex justify-between items-start md:hidden mb-4">
                                    <span className="text-sm font-mono text-pulse-500">{project.year}</span>
                                    {project.link && <ExternalLink className="w-5 h-5 text-gray-400" />}
                                </div>

                                {/* Desktop: Year */}
                                <div className="hidden md:block col-span-1 text-sm font-mono text-gray-400 group-hover:text-pulse-500 transition-colors">
                                    {project.year}
                                </div>

                                {/* Title */}
                                <div className="col-span-4 mb-2 md:mb-0">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-pulse-600 transition-colors flex items-center gap-2">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="col-span-6 text-gray-600 text-sm mb-4 md:mb-0 line-clamp-2 md:line-clamp-1">
                                    {project.description}
                                </div>

                                {/* Link Icon */}
                                <div className="col-span-1 hidden md:flex justify-end text-gray-400 group-hover:text-pulse-500 transition-colors">
                                    {project.link && <ExternalLink className="w-5 h-5" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
