import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer id="contact" className="w-full bg-white border-t border-gray-100 py-8">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-6">
                    {/* Left Side: Brand & Description */}
                    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                        <a href="#" aria-label="Nathan Lopes" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <img
                                src="/nathan-logo-new.png"
                                alt="Nathan Lopes Logo"
                                className="h-10 w-auto object-contain -ml-1"
                            />
                        </a>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            {t('footer.desc')}
                        </p>

                        <p className="text-gray-400 text-xs mt-2">
                            &copy; {currentYear} Nathan Lopes. {t('footer.rights')}
                        </p>
                    </div>

                    {/* Right Side: Contact & Socials */}
                    <div className="flex flex-col items-center lg:items-end gap-6">

                        {/* Call to Work */}
                        <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
                            <h3 className="text-xl font-bold text-gray-900">
                                {t('cta.title')}
                            </h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://wa.me/5584994121210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#20bd5a] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                                >
                                    {t('cta.button_whatsapp')}
                                </a>
                                <a
                                    href="mailto:nathanlpsr@gmail.com"
                                    className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
                                >
                                    {t('cta.button_email')}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/coderlupus" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2 rounded-full text-gray-600 hover:text-white hover:bg-gray-900 transition-all duration-300" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/nlopesr" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2 rounded-full text-gray-600 hover:text-white hover:bg-[#0077B5] transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:nathanlpsr@gmail.com" className="bg-gray-50 p-2 rounded-full text-gray-600 hover:text-white hover:bg-pulse-500 transition-all duration-300" aria-label="Email">
                                <Mail size={18} />
                            </a>
                            <a href="https://wa.me/5584994121210" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-2 rounded-full text-gray-600 hover:text-white hover:bg-[#25D366] transition-all duration-300" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
