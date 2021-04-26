import { useEffect, useState } from "react";
import { BACKEND_URL } from '../libs/dependencies';

function useFetch(songLengthState) {
  const [dataState, setDataState] = useState(1);
  const [quoteDataState, setQuoteDataState] = useState({});

  let songLengthStateNew = songLengthState / 30;

  if (songLengthStateNew <= 1) {
    songLengthStateNew = 1;
  } else {
    songLengthStateNew = Math.floor(songLengthStateNew);
  }

  const PATH = songLengthStateNew;

  async function fetchData() {
    let result = await fetch(`${BACKEND_URL}/songs/${PATH}`);
    let data = await result.json();
    setDataState(data);

    let QuoteResult = await fetch(`${BACKEND_URL}/quotes/${PATH}`);
    let QuoteData = await QuoteResult.json();
    setQuoteDataState(QuoteData);
  }

  useEffect(() => {
    fetchData();
  }, [songLengthState]);

  let DATA = { songData: dataState, quoteData: quoteDataState };
  console.log(DATA);
  return DATA;
}

export default useFetch;
