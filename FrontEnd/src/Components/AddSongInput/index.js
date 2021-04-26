import { useState } from 'react';
import usePost from '../../hooks/usePost';
import { songLengths } from '../../libs/dependencies';
import './AddSongInput.css';

const initialData = {
  Title: 'blank',
  Artist: 'blank',
  SongLengthCode: 'blank',
  Link: 'blank',
  SuggestedBy: 'blank',
};

function AddSongInput() {
  const [data, setData] = useState(initialData);
  const makePost = usePost();

  function UpdateData(event) {
    const key = event.target.id;
    const newValue = event.target.value;
	
    setData({ ...data, [key]: newValue });
  }

  return (
    <form id='form' className='add-song-form' action='submit'>
      <input
        type='text'
        placeholder='Title'
        id='Title'
        onChange={UpdateData}
      />
      <input
        type='text'
        placeholder='Artist'
        id='Artist'
        onChange={UpdateData}
      />
      <input
        type='text'
        placeholder='Link'
        id='Link'
        onChange={UpdateData}
      />
      <input
        type='text'
        placeholder='Your Name'
        id='SuggestedBy'
        onChange={UpdateData}
      />
      <select
        form='form'
        type='text'
        id='SongLengthCode'
        onChange={UpdateData}
        required
      >
        {songLengths.map((length) => (
          <option
            value={length.value}
          >{`${length.minutes} (${length.seconds})`}</option>
        ))}
      </select>

      <button
        className='add-song-btn'
        onClick={(event) => {
          event.preventDefault();
          makePost(data);

          document.querySelector('.add-song-form').reset();
        }}
      >
        Add Song
      </button>
    </form>
  );
}

export default AddSongInput;
