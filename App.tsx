import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Affiliate from './components/Affiliate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'affiliate' | 'contact';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks: { name: string; page: Page }[] = [
    { name: 'O nás', page: 'about' },
    { name: 'Co děláme', page: 'services' },
    { name: 'Affiliate', page: 'affiliate' },
    { name: 'Kontakt', page: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-thinkRed selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo container */}
          <button
            onClick={() => handleNavigate('home')}
            className={`flex items-center transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
          >
            <Logo className="h-6 md:h-8" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-sm font-bold uppercase tracking-wide hover:text-thinkRed transition-colors ${currentPage === 'home' ? 'text-thinkRed' : ''}`}
            >
              Domů
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.page)}
                className={`text-sm font-bold uppercase tracking-wide hover:text-thinkRed transition-colors ${currentPage === link.page ? 'text-thinkRed' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-thinkBlack"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
            <button
              onClick={() => handleNavigate('home')}
              className="text-lg font-medium py-2 border-b border-gray-50 text-left"
            >
              Domů
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.page)}
                className="text-lg font-medium py-2 border-b border-gray-50 text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-0">
        {currentPage === 'home' && (
          <>
            <Hero onCtaClick={() => handleNavigate('services')} />

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
                  onClick={() => handleNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-white text-thinkBlack px-8 py-4 font-bold text-lg hover:bg-thinkRed hover:text-white transition-all duration-300"
                >
                  Kontaktujte nás <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </>
        )}

        {currentPage === 'about' && <About />}

        {currentPage === 'services' && <Services />}

        {currentPage === 'affiliate' && <div className="pt-20"><Affiliate onCtaClick={() => handleNavigate('contact')} /></div>}

        {currentPage === 'contact' && <div className="pt-20"><Contact /></div>}
      </main>

      <Footer />
    </div>
  );
};

export default App;