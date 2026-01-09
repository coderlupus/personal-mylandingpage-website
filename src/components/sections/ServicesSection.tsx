import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Globe,
    Smartphone,
    Code2,
    Rocket,
    ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
    return (
        <div
            className="service-card group relative bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-gray-100 overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-pulse-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pulse-500 to-pulse-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pulse-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pulse-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150" />
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".services-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: ".services-header",
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                ".service-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: ".services-grid",
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            icon: <Globe className="w-7 h-7" />,
            titleKey: "services.items.websites.title",
            descKey: "services.items.websites.desc",
        },
        {
            icon: <Smartphone className="w-7 h-7" />,
            titleKey: "services.items.landing.title",
            descKey: "services.items.landing.desc",
        },
        {
            icon: <Code2 className="w-7 h-7" />,
            titleKey: "services.items.systems.title",
            descKey: "services.items.systems.desc",
        },
        {
            icon: <Rocket className="w-7 h-7" />,
            titleKey: "services.items.automation.title",
            descKey: "services.items.automation.desc",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
            id="services"
        >
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pulse-100 rounded-full blur-3xl opacity-30 -translate-y-1/2" />

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="text-center mb-16 services-header">
                    <div className="pulse-chip mb-4 inline-flex">
                        <span>{t('services.chip')}</span>
                    </div>
                    <h2 className="section-title mb-4">
                        {t('services.title')}
                    </h2>
                    <p className="section-subtitle mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>

                {/* Services Grid - 4 columns */}
                <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={t(service.titleKey)}
                            description={t(service.descKey)}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-pulse-600 font-semibold hover:gap-3 transition-all duration-300 group"
                    >
                        {t('services.cta')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
