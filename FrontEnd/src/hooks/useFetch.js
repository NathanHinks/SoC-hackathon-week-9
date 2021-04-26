import { useEffect, useState } from "react";
import { BACKEND_URL, getSong } from '../libs/dependencies';

function useFetch(songLengthState) {
  const [data, setData] = useState({});

  const PATH = getSong(songLengthState);

  async function fetchData() {
    let result = await fetch(`${BACKEND_URL}/songs/${PATH}`);
    let songData = await result.json();

    let quoteResult = await fetch(`${BACKEND_URL}/quotes/${PATH}`);
    let quoteData = await quoteResult.json();
    
    setData({songData: songData, quoteData: quoteData});
  }

  useEffect(() => {
    fetchData();
  }, [songLengthState]);

  return data;
}

export default useFetch;
