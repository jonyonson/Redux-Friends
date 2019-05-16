import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from '../actions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        friends: action.payload,
      };

    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
