import { BACKEND_URL } from '../libs/dependencies';

function usePost() {
  
    async function makePost(newSong) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSong),
      };
      await fetch(`${BACKEND_URL}/songs`, requestOptions);
    }

    return makePost;
}

export default usePost;
