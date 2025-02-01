import { useEffect } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';

import EnterCodeBlock from 'components/EnterCodeBlock/EnterCodeBlock';
import Heading from 'components/Heading/Heading';
import Image from 'components/Image/Image';
import Countdown from 'components/Countdown/Countdown';

import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import HomeImage from 'assets/gifs/home-image.gif';

import 'aos/dist/aos.css';
import './Home.styles.scss';

const Home = () => {
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
    <div className="Home flex flex-col gap-[20px] text-center md:gap-[40px]">
      <div data-aos="fade-in" data-aos-duration="1000">
        <Heading text="We're finally getting hitched 🤵🏾‍♂️👰🏻‍♀️" />
      </div>
      <div className="mx-auto w-full max-w-[600px]" data-aos="fade-in" data-aos-duration="1000">
        <Image image={HomeImage} />
      </div>
      {invitationData?.invitation_type === 'wedding' && (
        <div data-aos="fade-right" data-aos-duration="1000">
          <Countdown />
        </div>
      )}
      <div data-aos="fade-right" data-aos-duration="1000">
        <Countdown variant="party" />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
