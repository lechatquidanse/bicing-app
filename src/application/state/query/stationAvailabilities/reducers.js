import { FETCH } from 'application/state/query/stationAvailabilities/types';
import produce from 'immer';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  data: null,
  error: false,
  isFetching: false,
  stationId: null,
  byIntervalInPeriodFilter: null,
};

export const fetchStart = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.stationId = action.payload.stationId;
  draft.byIntervalInPeriodFilter = action.payload.byIntervalInPeriodFilter;
  draft.isFetching = action.meta.isFetching;
});

export const fetchPending = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.isFetching = action.meta.isFetching;
});

export const fetchSuccess = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.data = action.payload;
  draft.isFetching = action.meta.isFetching;
});

export const fetchFailure = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  draft.data = action.payload;
  draft.error = action.error;
  draft.isFetching = action.meta.isFetching;
});

const HANDLERS = {
  [FETCH.START]: fetchStart,
  [FETCH.PENDING]: fetchPending,
  [FETCH.SUCCESS]: fetchSuccess,
  [FETCH.FAILURE]: fetchFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
