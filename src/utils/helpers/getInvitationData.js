import { getInvitation } from 'api';

export const getInvitationData = async (
  code,
  invitationData,
  setInvitationError,
  setInvitationData,
  setInvitationLoading,
) => {
  if (!code || (invitationData && Object.keys(invitationData)?.length)) {
    setInvitationLoading(false);
    return;
  }

  try {
    setInvitationError('');
    const { invitation } = await getInvitation(code);
    setInvitationData({ ...invitation, code });
    setInvitationLoading(false);
  } catch (err) {
    const { error_message } = err;
    setInvitationError(error_message || 'Something went wrong');
    setInvitationLoading(false);
  }
};
