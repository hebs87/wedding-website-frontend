import { useEffect } from 'react';
import { useParams } from 'react-router';

import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

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
    getInvitationData(code, setInvitationError, setInvitationData, setInvitationLoading);
  }, [code, invitationData]);

  if (invitationLoading) return;

  return <div className="RSVP">{invitationError ? invitationError : 'RSVP'}</div>;
};

RSVP.propTypes = {};

export default RSVP;
