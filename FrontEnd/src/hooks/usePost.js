import { useEffect } from "react";
import { BACKEND_URL } from '../libs/dependencies';

function usePost(newSong) {
  
  useEffect(() => {
    function makePost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSong),
      };
      fetch(`${BACKEND_URL}/songs`, requestOptions);
    }

    makePost(newSong);
  }, [newSong]);
}

export default usePost;
