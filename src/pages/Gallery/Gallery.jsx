import { useEffect } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';

import EnterCodeBlock from 'components/EnterCodeBlock/EnterCodeBlock';
import Heading from 'components/Heading/Heading';

import { GALLERY_CODE } from 'config/config';

import 'aos/dist/aos.css';
import './Gallery.styles.scss';

const Gallery = () => {
  const { code } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Animation should only happen once
    });
    AOS.refresh();
  }, []);

  if (!code || code !== GALLERY_CODE)
    return (
      <div data-aos="fade-in" data-aos-duration="1000" className="mx-auto max-w-[600px]">
        <EnterCodeBlock isGallery />
      </div>
    );

  return (
    <div className="Gallery flex flex-col gap-[20px] text-center md:gap-[40px]">
      <div data-aos="fade-in" data-aos-duration="1000">
        <Heading text="Share your pics" customClasses="capitalize" />
      </div>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
