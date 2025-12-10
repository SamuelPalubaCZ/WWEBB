"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Hero from '@/src/components/Hero';

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Hero onCtaClick={() => router.push('/services')} />

            {/* CTA Element on Index */}
            <div id="content-start" className="bg-thinkBlack text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Připraveni zjednodušit vaše IT?
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Nechte starosti s technologiemi na nás a věnujte se naplno svému podnikání.
                    </p>
                    <button
                        onClick={() => router.push('/contact')}
                        className="inline-flex items-center gap-2 bg-white text-thinkBlack px-8 py-4 font-bold text-lg hover:bg-thinkRed hover:text-white transition-all duration-300"
                    >
                        Kontaktujte nás <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};
