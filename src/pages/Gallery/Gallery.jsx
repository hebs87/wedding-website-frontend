import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { PATH_HOME } from 'routes/paths';
import { getInvitationData } from 'utils/helpers/getInvitationData';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import './Gallery.styles.scss';

const Gallery = () => {
  const { code } = useParams();
  const {
    invitationData,
    invitationError,
    invitationLoading,
    setInvitationLoading,
    setInvitationData,
    setInvitationError,
  } = useInvitationContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) return navigate(PATH_HOME);

    getInvitationData(code, setInvitationError, setInvitationData, setInvitationLoading);
  }, [code, invitationData]);

  if (invitationLoading) return;

  return <div className="Gallery">{invitationError ? invitationError : 'Gallery'}</div>;
};

Gallery.propTypes = {};

export default Gallery;
