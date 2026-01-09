import React from "react";
import { useTranslation } from 'react-i18next';
import { ArrowRight } from "lucide-react";

const EndCredit = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="inspiration" className="w-full bg-white py-0" key={i18n.language}>
            <div className="section-container opacity-0 animate-on-scroll pb-2">
                <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
                    <div
                        className="bg-no-repeat bg-cover bg-center p-8 sm:p-12 min-h-[400px] sm:min-h-[450px] flex flex-col justify-center"
                        style={{
                            backgroundImage: "url('/background-section3.png')"
                        }}
                    >
                        {/* Quote */}
                        <div className="flex flex-col items-center justify-center text-center z-10 mb-10">
                            <h2 className="font-playfair text-white italic font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                                {t('end_quote.text')}
                            </h2>
                            <p className="text-white/80 text-sm sm:text-base lg:text-lg font-light tracking-wider">
                                {t('end_quote.author')}
                            </p>
                        </div>

                        {/* CTA integrated */}
                        <div className="flex flex-col items-center justify-center text-center z-10" id="contact">
                            <p className="text-white/90 text-lg sm:text-xl font-medium mb-6">
                                {t('cta.title')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="https://wa.me/5584994121210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                                >
                                    {t('cta.button_whatsapp')}
                                </a>
                                <a
                                    href="mailto:nathanlpsr@gmail.com"
                                    className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    {t('cta.button_email')}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* White box at the bottom with overflow */}
                        <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EndCredit;
