/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <header className="py-3 bg-white fixed w-full z-20">
                <div className="flex justify-between items-center maxWidth">
                    <div>
                        <a className='text-black uppercase font-black text-2xl font-Oswald ' href="">Sua Concessionária</a>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="w-8 h-8 hover:text-[#CCA686]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`lg:flex text-black font-semibold ${isOpen ? 'block' : 'hidden'} custom-height text-center bg-[#CCA686] flex flex-col gap-10 items-center justify-center  absolute left-0 z-10 top-[90px] uppercase w-full lg:flex lg:h-[39px] lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>

                        <ScrollLink duration={500} offset={-92} href='main' to='main' smooth={true} onClick={closeMenu}>
                            <span className={`block  py-2 cursor-pointer   ${activeSection === 'main' ? 'border-b-[2px] lg:border-black' : ''}`}>Início</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='vehicles' smooth={true} onClick={closeMenu}>
                            <span className={`block  py-2 cursor-pointer   ${activeSection === 'vehicles' ? 'border-b-[2px] lg:border-black' : ''}`}>Veículos</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='services' smooth={true} onClick={closeMenu}>
                            <span className={`block  py-2 cursor-pointer   ${activeSection === 'services' ? 'border-b-[2px] lg:border-black' : ''}`}>Contato</span>
                        </ScrollLink>

                        <Link href='/about' onClick={closeMenu}>
                            <span className={`block  py-2 cursor-pointer   ${activeSection === '/about' ? 'border-b-[2px] lg:border-black' : ''}`}>Sobre nós</span>
                        </Link>


                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
