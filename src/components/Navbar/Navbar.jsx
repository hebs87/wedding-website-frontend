import { useEffect } from 'react';
import { useParams } from 'react-router';

import Logo from 'components/Logo/Logo';
import NavLink from 'components/NavLink/NavLink';

import { DESKTOP_NAV_LINKS } from 'constants/navLinks';

import './Navbar.styles.scss';

const Navbar = () => {
  const { code } = useParams();
  const codePath = code ? `/${code}` : '';

  useEffect(() => {
    const handleNavScroll = () => {
      const topThreshold = 50;
      const navbar = document.querySelector('#Navbar');
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

  return (
    <div data-testid="Navbar" id="Navbar" className="Navbar fixed top-0 z-[999] hidden w-full justify-center md:flex">
      <div className="flex w-full max-w-[1400px] items-center justify-between px-[50px] py-[10px]">
        <Logo />
        <div className="flex items-center justify-between gap-[5px]">
          {DESKTOP_NAV_LINKS.map(({ text, path }, i) => (
            <NavLink key={i} path={`${path}${codePath}`} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
