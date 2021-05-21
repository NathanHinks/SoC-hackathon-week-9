import store from "./store"
import { setSuggestedSong, setIsLoading } from './actions';

export const updateSuggestedSong = (song) => store.dispatch(setSuggestedSong(song));

export const startLoading = () => store.dispatch(setIsLoading(true));

export const finishLoading = () => store.dispatch(setIsLoading(false));