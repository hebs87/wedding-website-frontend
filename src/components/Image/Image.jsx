import PropTypes from 'prop-types';

import './Image.styles.scss';

const Image = ({ image }) => {
  return (
    <div data-testid="Image" className="Image">
      <img src={image} alt="" className="w-full" />
      <div className="absolute bottom-0 top-0 block w-full"></div>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Image;
