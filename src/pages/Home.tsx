import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>ThinkHome | Kompletní správa a podpora IT pro firmy</title>
                <meta name="description" content="Nechte starosti s technologiemi na nás. Poskytujeme kompletní správu a podporu IT pro firmy. Soustřeďte se na své podnikání." />
            </Helmet>

            <Hero onCtaClick={() => navigate('/services')} />

            {/* CTA Element on Index */}
            <div className="bg-thinkBlack text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Připraveni zjednodušit vaše IT?
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Nechte starosti s technologiemi na nás a věnujte se naplno svému podnikání.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center gap-2 bg-white text-thinkBlack px-8 py-4 font-bold text-lg hover:bg-thinkRed hover:text-white transition-all duration-300"
                    >
                        Kontaktujte nás <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
