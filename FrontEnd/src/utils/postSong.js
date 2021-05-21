import { BACKEND_URL } from '../libs/dependencies';

const postSong = async (newSong) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSong),
  };

  await fetch(`${BACKEND_URL}/songs`, requestOptions);

  console.log('request sent to', BACKEND_URL, "with", newSong)
}

export default postSong;