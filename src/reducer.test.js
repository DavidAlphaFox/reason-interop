import reducer from './reducer.js';
import { RECEIVE_TOP_STORIES } from './actions';

describe('reducer', () => {
  it('returns initial state when state is undefined', () => {
    const state = reducer();

    expect(state).toEqual({ loaded: false, stories: [] });
  });

  it('returns current state if action unrecognised', () => {
    const initialState = {
      loaded: true,
      stories: [{ id: 1 }],
    };
    const state = reducer(initialState, '');

    expect(state).toEqual(initialState);
  });

  it('adds stories to state on RECEIVE_TOP_STORIES', () => {
    const initialState = {
      stories: [{ id: 1 }],
    };
    const newStories = [{ id: 1 }, { id: 2 }];
    const state = reducer(initialState, {
      type: RECEIVE_TOP_STORIES,
      payload: {
        stories: newStories,
      },
    });

    expect(state).toEqual({
      loaded: true,
      stories: newStories,
    });
  });
});
