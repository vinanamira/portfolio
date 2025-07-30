/**
 * @copyright 2025 Vina Namira
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }) => {
    const activeBox = useRef(null);
    const container = useRef(null);

    useGSAP(() => {
        const timer = setTimeout(() => {
            const sections = gsap.utils.toArray("section");
            const navLinks = gsap.utils.toArray(".nav-link");

            if (sections.length === 0 || navLinks.length === 0) return;

            const setActiveLink = (index) => {
                if (index < 0 || index >= navLinks.length) return;

                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");

                const link = navLinks[index];
                
                // Animasi dibuat lebih cepat (duration: 0.2)
                if (activeBox.current) {
                    gsap.to(activeBox.current, {
                        top: link.offsetTop,
                        left: link.offsetLeft,
                        width: link.offsetWidth,
                        height: link.offsetHeight,
                        duration: 0.2, // Durasi dipercepat
                        ease: "power2.out"
                    });
                }
            };

            sections.forEach((section, index) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top center-=100",
                    end: "bottom center-=100",
                    onEnter: () => setActiveLink(index),
                    onEnterBack: () => setActiveLink(index),
                });
            });

            setActiveLink(0);

        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, { scope: container });

    // Link 'Contact' yang ada di mobile menu sudah dihapus dari sini
    const navItems = [
        { label: 'Home', link: '#home' },
        { label: 'About', link: '#about' },
        { label: 'Tools', link: '#tools' },
        { label: 'Work', link: '#work' },
    ];

    return (
        <nav ref={container} className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link }, key) => (
                <a href={link} key={key} className="nav-link">
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

Navbar.PropTypes = {
    navOpen: PropTypes.bool.isRequired
}
export default Navbar;