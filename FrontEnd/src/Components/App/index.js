import { useState } from 'react';
import ReactPlayer from "react-player";
import useFetch from '../../hooks/useFetch';
import Footer from '../Footer';
import Header from '../Header';
import QuoteDisplay from '../QuoteDisplay';
import SongList from '../SongList';
import SquatInput from '../SquatInput';
import './App.css';


function App() {
	const [ dataState, setDataState ] = useState(0);

	const appData = useFetch(dataState);

	return (
		<div className='App'>
			<Header />
			{appData && 
				<>
					<SquatInput onClick={setDataState} />
					<QuoteDisplay data={appData.quoteData} />
					<ReactPlayer className="song-video" url={appData.songData.link} width="400px" height="300px" />
					<SongList className='list-com' data={appData.songData} />
				</>
		}
			<Footer />
		</div>
	);
}

export default App;
