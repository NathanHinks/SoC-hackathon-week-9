import React from 'react';
import AddSongInput from "../AddSongInput";

function Footer() {
  return (
   <footer>
					<img
					id='soc'
					src='https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png'
					alt='soc logo'
				/>
				<AddSongInput className='add-song-com' />
				<img
					id='soc'
					src='https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png'
					alt='soc logo'
				/>
			</footer>
  );
}

export default Footer;
