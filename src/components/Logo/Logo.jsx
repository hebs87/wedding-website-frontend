import { NavLink } from 'react-router';
import { useParams } from 'react-router';

import { PATH_HOME } from 'routes/paths';

import './Logo.styles.scss';

const Logo = () => {
  const { code } = useParams();
  const path = `${PATH_HOME}${code ? `/${code}` : ''}`;

  return (
    <NavLink data-testid="Logo" className="Logo px-[10px] pt-[5px] text-[32px]" to={path}>
      S&K
    </NavLink>
  );
};

Logo.propTypes = {};

export default Logo;
