
import { useEffect } from 'react';
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import getSong from '../../utils/getSong';
import Footer from '../Footer';
import Header from '../Header';
import QuoteDisplay from '../QuoteDisplay';
import SongList from '../SongList';
import SquatInput from '../SquatInput';
import './App.css';

const App = () => {
	const { numberOfSquats, isLoading }  = useSelector(state => state)
	const { link: videoUrl } = useSelector(state => state.suggestedSong)

	useEffect(() => getSong(numberOfSquats), [numberOfSquats])

	return (
		<div className='App'>
			<Header />
			{isLoading ?
				<ClipLoader color="white" size={200} css="margin: auto; grid-column: 1/-1;"/>
				:
				<>
					<SquatInput />
					<QuoteDisplay />
					<ReactPlayer className="song-video" url={videoUrl} width="400px" height="300px" />
					<SongList />
				</>
		}
			<Footer />
		</div>
	);
}

export default App;
