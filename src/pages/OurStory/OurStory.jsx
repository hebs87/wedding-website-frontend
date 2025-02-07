import { useEffect } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';

import EnterCodeBlock from 'components/EnterCodeBlock/EnterCodeBlock';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

import { OUR_STORY_POEM } from 'constants/poems';
import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import 'aos/dist/aos.css';
import './OurStory.styles.scss';

const OurStory = () => {
  const { code } = useParams();
  const {
    invitationData,
    invitationError,
    invitationLoading,
    setInvitationLoading,
    setInvitationData,
    setInvitationError,
  } = useInvitationContext();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Animation should only happen once
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    getInvitationData(code, invitationData, setInvitationError, setInvitationData, setInvitationLoading);
  }, [code, invitationData]);

  if (invitationLoading) return;

  if (!code || invitationError)
    return (
      <div data-aos="fade-in" data-aos-duration="1000" className="mx-auto max-w-[600px]">
        <EnterCodeBlock />
      </div>
    );

  return (
    <div className="OurStory flex flex-col gap-[20px] text-center md:gap-[40px]">
      <div data-aos="fade-in" data-aos-duration="1000">
        <Heading text="How we got here..." customClasses="capitalize" />
      </div>
      <div data-aos="fade-in" data-aos-duration="1000" className="text-left md:text-center">
        {OUR_STORY_POEM.map((paragraph, index) => (
          <Paragraph key={index} variant="uppercase" text={paragraph} />
        ))}
      </div>
    </div>
  );
};

OurStory.propTypes = {};

export default OurStory;
