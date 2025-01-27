import { useEffect } from 'react';
import { useParams } from 'react-router';

import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

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
    getInvitationData(code, invitationData, setInvitationError, setInvitationData, setInvitationLoading);
  }, [code, invitationData]);

  if (invitationLoading) return;

  return <div className="Home">{invitationError ? invitationError : 'Home'}</div>;
};

Home.propTypes = {};

export default Home;
