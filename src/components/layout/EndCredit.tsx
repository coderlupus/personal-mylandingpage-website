import React from "react";
import { useTranslation } from 'react-i18next';
import { ArrowRight } from "lucide-react";

const EndCredit = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="inspiration" className="w-full bg-white py-0" key={i18n.language}>
            <div className="section-container opacity-0 animate-on-scroll pb-2">

                {/* Main Wrapper */}
                <div className="flex flex-col">

                    {/* Image Container - Just the Quote */}
                    <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden relative mt-6 sm:mt-8 mb-6">
                        <div
                            className="bg-no-repeat bg-cover bg-center p-8 sm:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center relative"
                            style={{
                                backgroundImage: "url('/background-section3.png')"
                            }}
                        >
                            {/* Dark Overlay for better contrast */}
                            <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>

                            {/* Quote Content */}
                            <div className="flex flex-col items-center justify-center text-center z-10 max-w-4xl mx-auto">
                                <h2 className="font-playfair text-white italic font-thin text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 drop-shadow-md">
                                    {t('end_quote.text')}
                                </h2>
                                <p className="text-white/90 text-sm sm:text-base lg:text-xl font-light tracking-wider drop-shadow-md">
                                    {t('end_quote.author')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section - Outside Image (Desktop & Mobile) */}
                    <div className="bg-white py-8 md:py-12" id="contact">
                        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
                            <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-3">
                                {t('cta.title')}
                            </h3>
                            <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                                {t('cta.subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row w-full gap-4 justify-center">
                                {/* Green WhatsApp Button */}
                                <a
                                    href="https://wa.me/5584994121210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-green-500/30 hover:bg-[#20bd5a] transition-all transform active:scale-95 hover:-translate-y-1"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    {t('cta.button_whatsapp')}
                                </a>

                                {/* Email Button */}
                                <a
                                    href="mailto:nathanlpsr@gmail.com"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all transform active:scale-95 hover:-translate-y-1"
                                >
                                    {t('cta.button_email')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EndCredit;
