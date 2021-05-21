import { useSelector } from "react-redux";
import './SongList.css';

const SongList = () => {
	const {title, artist, link, suggestedBy} = useSelector(state => state.suggestedSong)
	return (
		<div className='song-list'>
			<h3>{title}</h3>
			<h4>
				<span>by </span>
				{artist}
			</h4>
			<p className="link-p">
				Link: <a href={link}>{link}</a>
			</p>

			<p className='suggested-by'>
				Suggested by <span>{suggestedBy}</span>
			</p>
		</div>
	);
}

export default SongList;
