import { defaultState } from '../libs/dependencies';

const reducer = (state = defaultState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'SET_NUMBER_OF_SQUATS':
      return { ...state, numberOfSquats: action.payload };
    case 'ADD_NEW_SONG':
      return { ...state, newSongSuggestion: action.payload };
    case 'SET_SUGGESTED_SONG':
      return { ...state, suggestedSong: action.payload }
    case 'SET_IS_LOADING':
      return {...state, isLoading: action.payload}
    default:
      return state;
  }
}

export default reducer;