import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from '../actions';

const initialState = {
  // deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  isLoggingIn: false,
  // savingFriends: false,
  // updatingFriend: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true,
        error: null,
      };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        error: null,
        friends: action.payload,
      };

    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
