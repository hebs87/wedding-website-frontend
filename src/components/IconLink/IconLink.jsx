import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faDiamondTurnRight, faAt } from '@fortawesome/free-solid-svg-icons';

import './IconLink.styles.scss';

const IconLink = ({ variant, href }) => {
  const icon = variant === 'instagram' ? faAt : variant === 'directions' ? faDiamondTurnRight : faGlobe;
  const label = variant === 'instagram' ? 'Instagram' : variant === 'directions' ? 'Directions' : 'Website';

  return (
    <a
      data-testid="IconLink"
      className="IconLink duration-250 inline-block rounded-full border-[2px] border-text px-[10px] py-[5px] transition-all hover:opacity-70"
      href={href}
      target="_blank"
    >
      <span className="inline-block translate-y-[1px]">
        <FontAwesomeIcon icon={icon} />
        <span className="ml-[5px]">{label}</span>
      </span>
    </a>
  );
};

IconLink.propTypes = {
  variant: PropTypes.oneOf(['website', 'directions', 'instagram']).isRequired,
  href: PropTypes.string.isRequired,
};

export default IconLink;
