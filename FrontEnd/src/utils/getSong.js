
import { BACKEND_URL } from '../libs/dependencies';
import { finishLoading, startLoading, updateSuggestedSong } from '../redux/dispatches';
import getSongLength from './getSongLength';

const getSong = async (numberOfSquats) => {
  startLoading()
  const PATH = getSongLength(numberOfSquats);

  const result = await fetch(`${BACKEND_URL}/songs/${PATH}`);
  const songData = await result.json();

  const quoteResult = await fetch(`${BACKEND_URL}/quotes/${PATH}`);
  const quoteData = await quoteResult.json();
  
  const suggestedSong = {
    ...songData,
    ...quoteData
  }
  
  updateSuggestedSong(suggestedSong)
  finishLoading()
}

export default getSong;