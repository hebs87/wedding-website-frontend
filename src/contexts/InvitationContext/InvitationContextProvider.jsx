import { useReducer } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from 'contexts/InvitationContext/InvitationContext.reducer';
import { INVITATION_CONTEXT_ACTIONS } from 'contexts/InvitationContext/InvitationContext.actions';
import { InvitationContext } from 'contexts/InvitationContext/InvitationContext';

const InvitationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInvitationData = (invitationData = null) => {
    dispatch({ type: INVITATION_CONTEXT_ACTIONS.SET_INVITATION_DATA, payload: { invitationData } });
  };

  const setInvitationError = (invitationError = '') => {
    dispatch({ type: INVITATION_CONTEXT_ACTIONS.SET_INVITATION_ERROR, payload: { invitationError } });
  };

  const setInvitationLoading = (invitationLoading = false) => {
    dispatch({ type: INVITATION_CONTEXT_ACTIONS.SET_INVITATION_LOADING, payload: { invitationLoading } });
  };

  return (
    <InvitationContext.Provider
      value={{
        ...state,
        setInvitationData,
        setInvitationError,
        setInvitationLoading,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
};

InvitationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InvitationContextProvider;
