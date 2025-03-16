/**
 * @copyright 2025 Vina Namira
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Register gsap plugins */
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }) => {
    const activeBox = useRef();

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 25%",   // Penyesuaian posisi agar lebih akurat
                end: "bottom 25%",
                onEnter: () => setActiveLink(index),
                onEnterBack: () => setActiveLink(index)
            });
        });

        const setActiveLink = (index) => {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");

            const link = navLinks[index];
            activeBox.current.style.top = link.offsetTop + 'px';
            activeBox.current.style.left = link.offsetLeft + 'px';
            activeBox.current.style.width = link.offsetWidth + 'px';
            activeBox.current.style.height = link.offsetHeight + 'px';
        };
    }, []);

    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link active' },
        { label: 'About', link: '#about', className: 'nav-link' },
        { label: 'Tools', link: '#tools', className: 'nav-link' },
        { label: 'Work', link: '#work', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className }, key) => (
                <a href={link} key={key} className={className}>
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