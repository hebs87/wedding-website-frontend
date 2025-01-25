import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useMediaQuery } from 'react-responsive';

import Logo from 'components/Logo/Logo';
import Burger from 'components/Burger/Burger';
import NavLink from 'components/NavLink/NavLink';

import { MOBILE_NAV_LINKS } from 'constants/navLinks';

import './MobileNavbar.styles.scss';

const MobileNavbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { code } = useParams();
  const codePath = code ? `/${code}` : '';
  const mobileDrawerRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    const handleNavScroll = () => {
      const topThreshold = 50;
      const navbar = document.querySelector('#MobileNavbar');
      if (window.scrollY > topThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleNavScroll);

    // Remove event listener when component dismounts
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  useEffect(() => {
    if (isMobile || !mobileNavOpen) return;
    setMobileNavOpen(false);
  }, [isMobile, mobileNavOpen]);

  const toggleMobileNav = () => setMobileNavOpen((prevState) => !prevState);

  return (
    <>
      <div
        data-testid="MobileNavbar"
        id="MobileNavbar"
        className="MobileNavbar fixed top-0 z-[999] flex w-full justify-center md:hidden"
      >
        <div className="flex w-full items-center justify-between py-[10px] pl-[20px] pr-[10px]">
          <Logo setMobileNavOpen={setMobileNavOpen} />
          <Burger mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />
        </div>
      </div>
      <div
        id="MobileDrawer"
        ref={mobileDrawerRef}
        className={`fixed top-[73px] h-[calc(100vh-73px)] w-[100vw] transition-all duration-500 md:hidden ${mobileNavOpen ? 'right-0' : 'right-[-100vw]'}`}
      >
        {MOBILE_NAV_LINKS.map(({ text, path }, i) => (
          <NavLink key={i} path={`${path}${codePath}`} text={text} setMobileNavOpen={setMobileNavOpen} />
        ))}
      </div>
    </>
  );
};

MobileNavbar.propTypes = {};

export default MobileNavbar;
