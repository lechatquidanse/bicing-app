import { createReducer } from 'reduxsauce'
import produce from 'immer';

import * as Types from 'application/state/query/station/types';

export const INITIAL_STATE = { error: null, data: null, payload: { isFetching: false } };

export const fetchStart = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    draft.payload = action.payload;
  });
};

export const fetchSuccess = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    draft.data = action.payload.data;
    draft.payload.isFetching = action.payload.isFetching;
  });
}

export const fetchFailure = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    draft.error = action.payload.error
    draft.payload.isFetching = action.payload.isFetching;
  });
}

const HANDLERS = {
  [Types.FETCH.START]: fetchStart,
  [Types.FETCH.SUCCESS]: fetchSuccess,
  [Types.FETCH.FAILURE]: fetchFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS);
