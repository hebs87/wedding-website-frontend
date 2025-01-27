import { useEffect } from 'react';
import { useParams } from 'react-router';

import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

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
    getInvitationData(code, setInvitationError, setInvitationData, setInvitationLoading);
  }, [code, invitationData]);

  if (invitationLoading) return;

  return <div className="OurStory">{invitationError ? invitationError : 'Our Story'}</div>;
};

OurStory.propTypes = {};

export default OurStory;
