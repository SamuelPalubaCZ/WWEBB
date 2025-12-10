import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Layout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        { name: 'O nás', path: '/about' },
        { name: 'Co děláme', path: '/services' },
        { name: 'Affiliate', path: '/affiliate' },
        { name: 'Kontakt', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-thinkRed selection:text-white">
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo container */}
                    <Link
                        to="/"
                        className={`flex items-center transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                    >
                        <Logo className="h-6 md:h-8" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <Link
                            to="/"
                            className={`text-sm font-bold uppercase tracking-wide hover:text-thinkRed transition-colors ${isActive('/') ? 'text-thinkRed' : ''
                                }`}
                        >
                            Domů
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-wide hover:text-thinkRed transition-colors ${isActive(link.path) ? 'text-thinkRed' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
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
                        <Link
                            to="/"
                            className="text-lg font-medium py-2 border-b border-gray-50 text-left"
                        >
                            Domů
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg font-medium py-2 border-b border-gray-50 text-left"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            <main className="flex-grow pt-0">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
