import React from 'react';

function Header() {
  return (
    <header>
      <img
        id='man'
        src='https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bodyweight-squat.gif?resize=480:*'
        alt='man squatting'
      />
      <h1>
        <span id='title-span'>SSSG</span>
        Super Squat Song Generator
      </h1>
      <img
        id='woman'
        src='https://thumbs.gfycat.com/BlueWetHarvestmouse-small.gif'
        alt='woman squatting'
      />
    </header>
  );
}

export default Header;
