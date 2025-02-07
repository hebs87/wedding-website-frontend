import PropTypes from 'prop-types';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Image from 'components/Image/Image';
import IconLink from 'components/IconLink/IconLink';

import './VenueDetails.styles.scss';

const VenueDetails = ({ name, location, description, image, links }) => {
  return (
    <div data-testid="VenueDetails" className="VenueDetails flex flex-col items-center gap-[20px]">
      {name && <Heading text={name} />}
      <div className="mb-[10px] w-full max-w-[600px]">
        <Image image={image} />
      </div>
      <Paragraph variant="uppercase" text={location} customClasses="mb-[5px] font-AmikoBold" />
      {description?.length > 0 && (
        <div className="mb-[10px] flex flex-col gap-[10px] text-center md:gap-[20px]">
          {description.map((paragraph, index) => (
            <Paragraph key={index} variant="uppercase" text={paragraph} />
          ))}
        </div>
      )}
      <div className="flex flex-col gap-[10px] xs:flex-row">
        {links.map((link, index) => (
          <IconLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

VenueDetails.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.oneOf(['website', 'directions', 'instagram']).isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default VenueDetails;
