import { useEffect } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';

import EnterCodeBlock from 'components/EnterCodeBlock/EnterCodeBlock';
import Heading from 'components/Heading/Heading';
import VenueDetails from 'components/VenueDetails/VenueDetails';

import { PARTY_VENUE_DETAILS } from 'constants/venueDetails';
import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import 'aos/dist/aos.css';
import './Party.styles.scss';

const Party = () => {
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
    <div className="Party flex flex-col gap-[20px] text-center md:gap-[40px]">
      <div data-aos="fade-in" data-aos-duration="1000">
        <Heading text="Party time 🪩" />
      </div>
      <div data-aos="fade-in" data-aos-duration="1000">
        <VenueDetails {...PARTY_VENUE_DETAILS} />
      </div>
    </div>
  );
};

Party.propTypes = {};

export default Party;
