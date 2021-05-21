import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formInputs, initialData, songLengths } from '../../libs/dependencies';
import postSong from '../../utils/postSong';
import { addNewSong } from '../../redux/actions';
import './AddSongInput.css';

const AddSongInput = () => {
  const [formData, setFormData] = useState(initialData);
  
  const updateFormData = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  }

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector('.add-song-form').reset();
    
    postSong(formData)
    dispatch(addNewSong(formData))
  }


  return (
    <form id='form' className='add-song-form' action='submit' onSubmit={handleSubmit}>
      
      {formInputs.map((input, i) => <input { ...input } key={i}onChange={ updateFormData } required />) }

      <select
        form='form'
        type='text'
        id='SongLengthCode'
        onChange={updateFormData}
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
        type='submit'
      >
        Add Song
      </button>
    </form>
  );
}

export default AddSongInput;
