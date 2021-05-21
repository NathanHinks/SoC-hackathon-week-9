import * as R from "ramda";

const getSongLength = (songLengthState) => R.compose(R.max(1), Math.floor, R.divide(R.__, 30))(songLengthState);

export default getSongLength;