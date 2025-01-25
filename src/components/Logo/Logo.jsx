import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { NavLink } from 'react-router';

import { PATH_HOME } from 'routes/paths';

import './Logo.styles.scss';

const Logo = ({ setMobileNavOpen }) => {
  const { code } = useParams();
  const path = `${PATH_HOME}${code ? `/${code}` : ''}`;

  return (
    <NavLink
      data-testid="Logo"
      className="Logo pt-[5px] text-[32px]"
      to={path}
      onClick={() => (setMobileNavOpen ? setMobileNavOpen(false) : {})}
    >
      S&K
    </NavLink>
  );
};

Logo.propTypes = {
  setMobileNavOpen: PropTypes.func,
};

export default Logo;
