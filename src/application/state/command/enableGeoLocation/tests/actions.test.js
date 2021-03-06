import * as actions from 'application/state/command/enableGeoLocation/actions';
import { ENABLE } from 'application/state/command/enableGeoLocation/types';
import { isFSA } from 'flux-standard-action';

describe('application/state/command/enableGeoLocation/actions', () => {
  test('should create an action to enable geoLocation with function enable()', () => {
    const itineraryStep = 1;
    const action = actions.enable(itineraryStep);

    expect(isFSA(action)).toEqual(true);
    expect(action).toEqual({
      payload: { itineraryStep },
      type: ENABLE.START,
    });
  });
});
