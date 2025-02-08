import PropTypes from 'prop-types';

import { NavLink } from 'react-router';

import { PATH_HOME } from 'routes/paths';

import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import './Logo.styles.scss';

const Logo = ({ setMobileNavOpen, isGallery }) => {
  const { invitationData } = useInvitationContext();
  const { code } = invitationData || {};
  const path = `${code ? `/${code}` : PATH_HOME}`;

  return (
    <NavLink
      data-testid="Logo"
      className="Logo pt-[5px] text-[32px]"
      to={isGallery ? null : path}
      onClick={() => (setMobileNavOpen ? setMobileNavOpen(false) : {})}
    >
      S&K
    </NavLink>
  );
};

Logo.propTypes = {
  setMobileNavOpen: PropTypes.func,
  isGallery: PropTypes.bool.isRequired,
};

export default Logo;
