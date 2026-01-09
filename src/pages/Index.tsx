import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CertificationsBadges from "@/components/sections/CertificationsBadges";
import EndCredit from "@/components/layout/EndCredit";

const Index = () => {
    const location = useLocation();
    const { i18n } = useTranslation();

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

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [i18n.language]);

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.substring(1);

            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offset = window.innerWidth < 768 ? 100 : 80;
                    window.scrollTo({
                        top: targetElement.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location.hash]);

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href')?.substring(1);
                if (!targetId) return;

                const targetElement = document.getElementById(targetId);
                if (!targetElement) return;

                const offset = window.innerWidth < 768 ? 100 : 80;

                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="space-y-0">
                <Hero />
                <AboutSection />
                <ServicesSection />
                <FeaturedProjects />
                <CertificationsBadges />
                <EndCredit />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
