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
                        className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 min-h-[250px] sm:min-h-[300px] flex flex-col justify-center"
                        style={{
                            backgroundImage: "url('/background-section3.png')"
                        }}
                    >
                        {/* Quote */}
                        <div className="flex flex-col items-center justify-center text-center z-10">
                            <h2 className="font-playfair text-white italic font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                                {t('end_quote.text')}
                            </h2>
                            <p className="text-white/80 text-sm sm:text-base lg:text-lg font-light tracking-wider">
                                {t('end_quote.author')}
                            </p>
                        </div>

                        {/* CTA integrated */}


                        {/* White box at the bottom with overflow */}
                        <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EndCredit;
