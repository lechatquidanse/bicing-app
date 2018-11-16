import produce from 'immer';

import reducer from 'application/state/query/lastAvailabilities/reducers';
import * as Types from 'application/state/query/lastAvailabilities/types';

const INITIAL_STATE = { error: null, data: null, payload: { isFetching: false } };

describe('application/state/query/lastAvailabilities/reducers', () => {
    it('should have initial state', () => {
        expect(reducer()).toEqual(INITIAL_STATE);
    });

    it('should not affect state for an unknow action type', () => {
        expect(reducer(INITIAL_STATE, { type: 'NOT_EXISTING' })).toEqual(INITIAL_STATE);
    });


    it('should affect state for action with type defining a fetch list start', () => {
        const expectedState = produce(INITIAL_STATE, draft => {
            draft.payload = { isFetching: true };
        });
        expect(reducer(INITIAL_STATE, { type: Types.FETCH_LIST.START, payload: { isFetching: true } })).toEqual(expectedState);
    });

    it('should affect state for action with type defining a fetch list success', () => {
        const expectedState = produce(INITIAL_STATE, draft => {
            draft.data = [
                'last availability 1', 'last availability 2'
            ];
        });

        expect(reducer(INITIAL_STATE, {
            type: Types.FETCH_LIST.SUCCESS,
            payload: {
                data: ['last availability 1', 'last availability 2'],
                isFetching: false,
            }
        })).toEqual(expectedState);
    });

    it('should affect state for action with type defining a fetch list failure', () => {
        const expectedState = produce(INITIAL_STATE, draft => {
            draft.error = 'An error occured during fetch list.';
        });
        expect(reducer(INITIAL_STATE, {
            type: Types.FETCH_LIST.FAILURE,
            payload: {
                error: 'An error occured during fetch list.',
                isFetching: false,
            }
        })).toEqual(expectedState);
    });
})
