'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Về Tín An', href: '#founder-story' },
        { name: 'Bộ sưu tập', href: '#products' },
        { name: 'Quy trình', href: '#service' },
        { name: 'Liên hệ', href: '#footer' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center text-primary-dark">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Logo Image */}
                    <img
                        src="/assets/logo.jpg"
                        alt="Tín An Logo"
                        className="h-14 w-32"
                    />

                </Link>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? 'text-secondary' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & MOBILE TOGGLE */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:0852145968"
                        className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
                    >
                        <Phone size={18} />
                        <span>085 214 5968</span>
                    </a>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-secondary' : 'text-white'}`}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 md:hidden border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-secondary font-semibold uppercase tracking-wider text-center py-2 border-b border-gray-100 last:border-0"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:0852145968"
                        className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-bold mt-2"
                    >
                        <Phone size={18} />
                        <span>Hotline: 085 214 5968</span>
                    </a>
                </div>
            )}
        </header>
    );
};
