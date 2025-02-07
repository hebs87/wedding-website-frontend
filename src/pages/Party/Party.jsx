import { useEffect } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';

import EnterCodeBlock from 'components/EnterCodeBlock/EnterCodeBlock';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import VenueDetails from 'components/VenueDetails/VenueDetails';

import { PARTY_VENUE_DETAILS, PARTY_HOTELS } from 'constants/venueDetails';
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
    window.scrollTo(0, 0);
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
    <div className="Party flex flex-col gap-[20px] text-center">
      <div data-aos="fade-in" data-aos-duration="1000" className="flex flex-col gap-[20px]">
        <Heading text="Party time!" customClasses="capitalize" />
        <VenueDetails {...PARTY_VENUE_DETAILS} />
      </div>
      <div data-aos="fade-in" data-aos-duration="1000" className="mt-[40px] flex flex-col gap-[20px]">
        <Heading text="Places to stay" customClasses="capitalize" />
        <div>
          <Paragraph
            variant="uppercase"
            text="
              If you fancy staying over, there are plenty of places to stay. Here are some of the nearby hotels, but
              feel free to have a look at any others around there.
            "
          />
          {PARTY_HOTELS?.map((hotel, index) => (
            <VenueDetails key={index} {...hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

Party.propTypes = {};

export default Party;
