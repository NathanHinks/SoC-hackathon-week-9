export const BACKEND_URL = 'https://supersquatsongapp.herokuapp.com';

export const getSong = (songLengthState) => Math.max(songLengthState / 30, 1);

export const songLengths = [
  {
    value: '0',
    minutes: 'How Long is The Song?',
    seconds: 'please select',
  },
  {
    value: '1',
    minutes: '0 - 1 minute',
    seconds: '0s-60s',
  },
  {
    value: '2',
    minutes: '1 - 1.5 minutes',
    seconds: '61s-90s',
  },
  {
    value: '3',
    minutes: '1.5 - 2 minutes',
    seconds: '91s-120s',
  },
  {
    value: '4',
    minutes: '2 - 2.5 minutes',
    seconds: '121s-150s',
  },
  {
    value: '5',
    minutes: '2.5 - 3 minutes',
    seconds: '151s-180s',
  },
  {
    value: '6',
    minutes: '3 - 3.5 minutes',
    seconds: '181s-210s',
  },
  {
    value: '7',
    minutes: '3.5 - 4 minutes',
    seconds: '211s-240s',
  },
  {
    value: '8',
    minutes: '4 - 4.5 minutes',
    seconds: '241s-280s',
  },
];
