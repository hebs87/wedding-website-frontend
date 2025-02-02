import PropTypes from 'prop-types';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Image from 'components/Image/Image';
import IconLink from 'components/IconLink/IconLink';

import './VenueDetails.styles.scss';

const VenueDetails = ({ name, description, image, links }) => {
  return (
    <div data-testid="VenueDetails" className="VenueDetails flex flex-col items-center gap-[20px]">
      <Heading text={name} />
      {description && (
        <div className="flex flex-col gap-[10px] text-center">
          {description.map((paragraph, index) => (
            <Paragraph key={index} variant="uppercase" text={paragraph} />
          ))}
        </div>
      )}
      <div className="w-full max-w-[600px]">
        <Image image={image} />
      </div>
      <div className="flex flex-col gap-[10px] xs:flex-row">
        {links.map((link, index) => (
          <IconLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

VenueDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.oneOf(['website', 'directions', 'instagram']).isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default VenueDetails;
