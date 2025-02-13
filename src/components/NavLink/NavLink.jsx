import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router';

import './NavLink.styles.scss';

const NavLink = ({ text, path, setMobileNavOpen }) => {
  return (
    <RouterNavLink
      data-testid="NavLink"
      to={path}
      onClick={() => (setMobileNavOpen ? setMobileNavOpen(false) : {})}
      className={({ isActive }) =>
        [
          // Standard classes
          'duration-250 flex w-full items-center justify-center p-[10px] text-[22px] uppercase transition-all hover:opacity-70 md:inline md:w-auto md:text-[18px]',
          // Active classes
          isActive ? 'font-AmikoBold underline' : '',
        ].join(' ')
      }
    >
      {text}
    </RouterNavLink>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setMobileNavOpen: PropTypes.func,
};

export default NavLink;
