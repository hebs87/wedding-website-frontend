import { INVITATION_CONTEXT_ACTIONS } from 'contexts/InvitationContext/InvitationContext.actions';

export const initialState = {
  invitationData: null,
  invitationError: '',
  invitationLoading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INVITATION_CONTEXT_ACTIONS.SET_INVITATION_DATA:
      return {
        ...state,
        invitationData: action.payload.invitationData,
      };
    case INVITATION_CONTEXT_ACTIONS.SET_INVITATION_ERROR:
      return {
        ...state,
        invitationError: action.payload.invitationError,
      };
    case INVITATION_CONTEXT_ACTIONS.SET_INVITATION_LOADING:
      return {
        ...state,
        invitationLoading: action.payload.invitationLoading,
      };
    default:
      return state;
  }
};
