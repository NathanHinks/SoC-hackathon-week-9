export const setNumberOfSquats = (numberOfSquats) => ({
  type: 'SET_NUMBER_OF_SQUATS',
  payload: numberOfSquats
})

export const addNewSong = (song) => ({
  type: 'ADD_NEW_SONG',
  payload: song
})

export const setSuggestedSong = (song) => ({
  type: 'SET_SUGGESTED_SONG',
  payload: song
})

export const setIsLoading = (status) => ({
  type: 'SET_IS_LOADING',
  payload: status
})