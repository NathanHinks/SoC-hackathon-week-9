import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNumberOfSquats } from '../../redux/actions';
import './SquatInput.css';

const SquatInput = () => {
	const dispatch = useDispatch();
	const [ input, setInput ] = useState(0);

	const handleClick = (e) => {
		e.preventDefault()
		dispatch(setNumberOfSquats(input));
	}

	return (
		<form className='squat-input-form'>
			<p className='squat-text'>
				Enter How Many Squats You Gotta Do:
			</p>
			<input
				className='squat-input-number'
				type='number'
				min='0'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				className='squat-input-btn'
				type='submit'
				onClick={handleClick}
			>
				Get Songs
			</button>
		</form>
	);
}

export default SquatInput;

