import { useContext } from 'react';
import { InvitationContext } from 'contexts/InvitationContext/InvitationContext';

export const useInvitationContext = () => useContext(InvitationContext);
