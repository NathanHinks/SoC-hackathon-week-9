export const BACKEND_URL = "https://supersquatsongapp.herokuapp.com"

export const getSong = (songLengthState) => Math.max((songLengthState/30), 1);