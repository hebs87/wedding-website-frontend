import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import Logo from 'components/Logo/Logo';
import Burger from 'components/Burger/Burger';
import NavLink from 'components/NavLink/NavLink';

import { PATH_HOME } from 'routes/paths';
import { MOBILE_NAV_LINKS } from 'constants/navLinks';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import './MobileNavbar.styles.scss';

const MobileNavbar = ({ isGallery }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { invitationData } = useInvitationContext();
  const { code, invitation_type } = invitationData || {};
  const codePath = code ? `/${code}` : '';
  const mobileDrawerRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (isMobile || !mobileNavOpen) return;
    setMobileNavOpen(false);
  }, [isMobile, mobileNavOpen]);

  useEffect(() => {
    const body = document.body;
    if (mobileNavOpen) {
      body.classList.add('lock-scroll');
    } else {
      body.classList.remove('lock-scroll');
    }
  }, [mobileNavOpen]);

  const toggleMobileNav = () => setMobileNavOpen((prevState) => !prevState);

  return (
    <>
      <div
        data-testid="MobileNavbar"
        id="MobileNavbar"
        className="MobileNavbar fixed top-0 z-[999] flex w-full justify-center md:hidden"
      >
        <div className="flex w-full items-center justify-between py-[10px] pl-[20px] pr-[10px]">
          <Logo setMobileNavOpen={setMobileNavOpen} isGallery={isGallery} />
          {!isGallery && <Burger mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />}
        </div>
      </div>
      {!isGallery && (
        <div
          id="MobileDrawer"
          ref={mobileDrawerRef}
          className={`fixed top-[73px] z-[999] h-[calc(100vh-73px)] w-[100vw] transition-all duration-500 md:hidden ${mobileNavOpen ? 'right-0' : 'right-[-100vw]'}`}
        >
          {MOBILE_NAV_LINKS.map(({ text, path }, i) => {
            if ((!invitationData && text === 'Gallery') || (invitation_type !== 'wedding' && text === 'Wedding'))
              return null;

            return (
              <NavLink
                key={i}
                path={`${path === PATH_HOME && codePath ? '' : path}${codePath}`}
                text={text}
                setMobileNavOpen={setMobileNavOpen}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

MobileNavbar.propTypes = {
  isGallery: PropTypes.bool.isRequired,
};

export default MobileNavbar;
