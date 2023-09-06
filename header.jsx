import Link from "next/link"
import Image from "next/image"
// import React, { useState } from 'react';
import { useState, useEffect } from 'react';


import { useRouter } from 'next/router';

// function getRouteName(){
//     const router = useRouter();
//     const currentPage = router.pathname;

//     const [isNaslovnica, setIsNaslovnica] = React.useState(false);        
//     const [isRecepti, setIsRecepti] = React.useState(false);
//     const [isONama, setIsONama] = React.useState(false);

//     const isActive = () => {
//         setIsNaslovnica(!isNaslovnica);
//         setIsRecepti(!isRecepti);
//         setIsONama(!isONama);
//     };

//     // if(currentPage=="/recepti/[cat]/[cat_id]"||currentPage=="/recepti/[cat]"||currentPage=="/recepti")
//     //     return "Recepti";
//     // else if(currentPage=="/o-nama")
//     //     return "O nama";
//     // else if(currentPage=="/")
//     //     return "Naslovnica";
    
//     {`navLink ${isActive ? 'active' : ''}`}
//     };

function MobileMenu() {
    const router = useRouter();
    const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
return(
    <div>
        
  <button className="menu-button" onClick={toggleMenu}><Image src="/ikone/hambi_menu.png" alt="menu"width={40} height={40}/></button>
                
            <div className={`menu-mobile ${isMenuOpen ? 'show-menu' : ''}`}>
            <div>
            <div className="menu-mobile-top">
                <Link className="logo-mobile-top" href="/"> Ku<span className="z">Ž</span>inavanje  </Link>
                <button className="menu-button" onClick={toggleMenu}><Image src="/ikone/close.png" alt="menu"width={40} height={40}/></button>
            </div>
                    <Link className={activePage === '/' ? 'activeLinkMobile' : 'navLinkMobile'} href="/">Naslovnica</Link>
                    <Link className={activePage === '/recepti' || activePage === '/recepti/[cat]'|| activePage === '/recepti/[cat]/[cat_id]'? 'activeLinkMobile' : 'navLinkMobile'} href="/recepti">Recepti</Link>
                    <Link className={activePage === '/o-nama' ? 'activeLinkMobile' : 'navLinkMobile'} href="/o-nama">O nama</Link>
                    </div>
                    <div>
                    <div className='socialMediaMobile'>
                    <p className='kuhari'>Zapratite kuhare</p>
                    <div>
                        <Link className='socials' href="https://www.facebook.com/"><Image src="/ikone/facebook.png" alt="facebook" width={50} height={50} /></Link>
                        <Link className='socials' href="https://www.instagram.com/"><Image src="/ikone/instagram.png" alt="instagram" width={50} height={50} /></Link>
                        <Link className='socials' href="https://www.twitter.com/"><Image src="/ikone/twitter.png" alt="twitter" width={50} height={50} /></Link>
                    </div>
                </div>
                    <p className='bottomPageMobile'>Copyright Bruna Rako 2023</p>
            </div>
            </div>
            
            </div>
);
}


export const Header = () => {
    const router = useRouter();
    const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);

    return(
        <header>
            <div className='topNav'>
            <Link className="topNavLogo" href="/"> Ku<span className="z">Ž</span>inavanje </Link>
            
            <nav>
                <Link className={activePage === '/o-nama' ? 'activeNav' : 'navLink'} href="/o-nama">O nama</Link>
                <Link className={activePage === '/recepti' || activePage === '/recepti/[cat]'|| activePage === '/recepti/[cat]/[cat_id]'? 'activeNav' : 'navLink'} href="/recepti">Recepti</Link>
                <Link className={activePage === '/' ? 'activeNav' : 'navLink'} href="/">Naslovnica</Link>
                
            </nav>
            <MobileMenu/>

                
            </div>
        </header>
    )
}