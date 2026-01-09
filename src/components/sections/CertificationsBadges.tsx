import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, ExternalLink, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Certification {
    name: string;
    issuer: string;
    file?: string;
}

const CertificationsBadges: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    const certifications = t('certifications.items', { returnObjects: true }) as Certification[];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".creds-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: ".creds-header",
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                ".cert-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: ".certs-grid",
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
            id="credentials"
        >
            <div className="section-container relative z-10">
                {/* Header */}
                <div className="text-center mb-12 creds-header">
                    <div className="pulse-chip mb-4 inline-flex">
                        <span>{t('credentials.chip')}</span>
                    </div>
                    <h2 className="section-title mb-4">
                        {t('credentials.title')}
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Education Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <Building2 className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-500">UFRN</span>
                                </div>
                                <h3 className="font-bold text-gray-900 text-xl mb-1">
                                    {t('credentials.education.title')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('credentials.education.desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-pulse-500" />
                            {t('credentials.certs.title')}
                        </h3>
                    </div>

                    <div className="certs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.isArray(certifications) && certifications.map((cert, idx) => {
                            const CardContent = (
                                <>
                                    <div className="p-2 bg-pulse-50 rounded-lg text-pulse-600 group-hover:bg-pulse-100 transition-colors">
                                        <Award size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-pulse-600 transition-colors line-clamp-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                                    </div>
                                    {cert.file && (
                                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-pulse-500 transition-colors flex-shrink-0" />
                                    )}
                                </>
                            );

                            return cert.file ? (
                                <a
                                    key={idx}
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-card flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-pulse-200 transition-all duration-300 group cursor-pointer"
                                >
                                    {CardContent}
                                </a>
                            ) : (
                                <div
                                    key={idx}
                                    className="cert-card flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white group"
                                >
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default CertificationsBadges;
