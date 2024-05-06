'use client';
import React from 'react';

interface NavbarSectionProps {
    title: string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;// This should be the id selector like "#about"
}
const scrollToSection = (id: string) => {
    // Remove the leading "#" to use it as an id
    const sectionId = id.startsWith('#') ? id.substring(1) : id;
    const section = document.getElementById(sectionId);
    const navbarHeight = 180; // Height of your navbar, adjust accordingly

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}


const NavbarSection: React.FC<NavbarSectionProps> = ({ title, href,onClick }) => {
    
    if(href){
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        scrollToSection(href); // Use the href as the id to scroll to
    };

    return (
        <a href={href} onClick={handleClick} className="text-center p-5 justify-center md:block cursor-pointer hover:bg-gray-300 transition rounded-xl">
            <div className='text-2xl font-bold text-center'>
                {title}
            </div>
        </a>
    );
    } 
    if(onClick){
        return (
            <button onClick={onClick} className="text-center p-5 justify-center md:block cursor-pointer hover:bg-gray-300 transition rounded-xl">
            <div className='text-2xl font-bold text-center'>
                {title}
            </div>
            </button>
        )
    }
}

export default NavbarSection;