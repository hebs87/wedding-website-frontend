import { useEffect } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';

import EnterCodeBlock from 'components/EnterCodeBlock/EnterCodeBlock';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import RSVPForm from 'components/RSVPForm/RSVPForm';

import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import 'aos/dist/aos.css';
import './RSVP.styles.scss';

const RSVP = () => {
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

  const { invitation_type, responded } = invitationData;

  return (
    <div className="RSVP flex flex-col gap-[20px] text-center md:gap-[30px]">
      <div data-aos="fade-in" data-aos-duration="1000">
        <Heading text="See you there? ✍️" />
      </div>
      {responded ? (
        <div data-aos="fade-in" data-aos-duration="1000">
          <Paragraph
            variant="uppercase"
            text="
              Thanks a lot, we've got your response! If you change your mind, or need to update any of your details,
              please get in touch with either of us.
            "
          />
        </div>
      ) : (
        <>
          <div data-aos="fade-in" data-aos-duration="1000">
            <Paragraph
              variant="uppercase"
              text={`
                Please let us know if you're able to help us celebrate our 
                ${invitation_type === 'wedding' ? 'intimate ceremony and ' : ''}Happily Ever After-party!
              `}
            />
          </div>
          <div data-aos="fade-in" data-aos-duration="1000">
            <Paragraph
              variant="uppercase"
              text={`
                Let us know who can make it by checking the relevant
                boxes${invitation_type === 'wedding' ? ' (meal choices to follow soon)' : ''}. If you, or
                anyone in your party can't make it, then absolutely no worries at all, just leave those boxes unchecked
                (but still submit the form!) if that's the case. We're looking forward to hopefully seeing you there!
              `}
            />
          </div>
          <div data-aos="fade-in" data-aos-duration="1000">
            <RSVPForm />
          </div>
        </>
      )}
    </div>
  );
};

RSVP.propTypes = {};

export default RSVP;
