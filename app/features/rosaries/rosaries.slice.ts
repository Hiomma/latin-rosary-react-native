import {createSlice} from '@reduxjs/toolkit';
import TrackPlayer from 'react-native-track-player';
import {EnumPrayer} from '../../enums/prayer.enum';
import {prayers} from '../prayers/prayers.slice';

export const phases = [
  {from: 0, to: 0, prayerType: EnumPrayer.SIGNUM_CRUCIS},
  {from: 1, to: 1, prayerType: EnumPrayer.CREDO},
  {from: 2, to: 2, prayerType: EnumPrayer.PATER_NOSTER},
  {from: 3, to: 5, prayerType: EnumPrayer.AVE_MARIA},
  {from: 6, to: 6, prayerType: EnumPrayer.GLORIA_PATRI},
  {from: 7, to: 7, prayerType: EnumPrayer.ORATIO_FATIMA},
  {from: 8, to: 8, prayerType: EnumPrayer.FIRST_MYSTERIUM},
  {from: 9, to: 9, prayerType: EnumPrayer.PATER_NOSTER},
  {from: 10, to: 19, prayerType: EnumPrayer.AVE_MARIA},
  {from: 20, to: 20, prayerType: EnumPrayer.GLORIA_PATRI},
  {from: 21, to: 21, prayerType: EnumPrayer.ORATIO_FATIMA},
  {from: 22, to: 22, prayerType: EnumPrayer.SECOND_MYSTERIUM},
  {from: 23, to: 23, prayerType: EnumPrayer.PATER_NOSTER},
  {from: 24, to: 33, prayerType: EnumPrayer.AVE_MARIA},
  {from: 34, to: 34, prayerType: EnumPrayer.GLORIA_PATRI},
  {from: 35, to: 35, prayerType: EnumPrayer.ORATIO_FATIMA},
  {from: 36, to: 36, prayerType: EnumPrayer.THIRD_MYSTERIUM},
  {from: 37, to: 37, prayerType: EnumPrayer.PATER_NOSTER},
  {from: 38, to: 47, prayerType: EnumPrayer.AVE_MARIA},
  {from: 48, to: 48, prayerType: EnumPrayer.GLORIA_PATRI},
  {from: 49, to: 49, prayerType: EnumPrayer.ORATIO_FATIMA},
  {from: 50, to: 50, prayerType: EnumPrayer.FORTH_MYSTERIUM},
  {from: 51, to: 51, prayerType: EnumPrayer.PATER_NOSTER},
  {from: 52, to: 61, prayerType: EnumPrayer.AVE_MARIA},
  {from: 62, to: 62, prayerType: EnumPrayer.GLORIA_PATRI},
  {from: 63, to: 63, prayerType: EnumPrayer.ORATIO_FATIMA},
  {from: 64, to: 64, prayerType: EnumPrayer.FIFTH_MYSTERIUM},
  {from: 65, to: 65, prayerType: EnumPrayer.PATER_NOSTER},
  {from: 66, to: 75, prayerType: EnumPrayer.AVE_MARIA},
  {from: 76, to: 76, prayerType: EnumPrayer.GLORIA_PATRI},
  {from: 77, to: 77, prayerType: EnumPrayer.ORATIO_FATIMA},
  {from: 78, to: 78, prayerType: EnumPrayer.SALVE_REGINA},
];

const initialValues = {
  currentPrayerId: prayers.find(p => p.type === EnumPrayer.SIGNUM_CRUCIS)?.id,
  currentIndex: 0,
  aveMariaCount: 0,
  mysteriumCount: 0,
  isPrayerPlaying: false,
  lastPrayer: false,
};

export const prayersSlice = createSlice({
  name: 'rosary',
  initialState: initialValues,
  reducers: {
    nextRosaryPrayer: state => {
      state.currentIndex++;

      state.lastPrayer = false;

      const currentPrayerType = phases.find(
        p => state.currentIndex >= p.from && state.currentIndex <= p.to,
      )!.prayerType;

      const nextPrayer = prayers.find(pr => pr.type === currentPrayerType)!;

      switch (nextPrayer.type) {
        case EnumPrayer.PATER_NOSTER:
          state.aveMariaCount = 0;
          break;
        case EnumPrayer.AVE_MARIA:
          state.aveMariaCount++;
          break;
        case EnumPrayer.FIRST_MYSTERIUM:
        case EnumPrayer.SECOND_MYSTERIUM:
        case EnumPrayer.THIRD_MYSTERIUM:
        case EnumPrayer.FORTH_MYSTERIUM:
        case EnumPrayer.FIFTH_MYSTERIUM:
          state.mysteriumCount++;
          break;
        case EnumPrayer.SALVE_REGINA:
          state.lastPrayer = true;
          break;
      }

      TrackPlayer.skip(nextPrayer.id - 1);
      state.currentPrayerId = nextPrayer.id;
    },
    previousRosaryPrayer: state => {
      state.currentIndex--;

      state.lastPrayer = false;
      const currentPrayerType = phases.find(
        p => state.currentIndex >= p.from && state.currentIndex <= p.to,
      )!.prayerType;

      const nextPrayer = prayers.find(pr => pr.type === currentPrayerType)!;

      switch (nextPrayer.type) {
        case EnumPrayer.PATER_NOSTER:
          state.aveMariaCount = 0;
          break;
        case EnumPrayer.AVE_MARIA:
          state.aveMariaCount--;
          break;
        case EnumPrayer.GLORIA_PATRI:
          state.aveMariaCount = state.mysteriumCount === 0 ? 4 : 11;
          break;
        case EnumPrayer.ORATIO_FATIMA:
          if (state.mysteriumCount > 0) {
            state.mysteriumCount--;
          }
          break;
      }

      TrackPlayer.skip(nextPrayer.id - 1);
      state.currentPrayerId = nextPrayer.id;
    },
    pauseRosary: state => {
      TrackPlayer.pause();
      state.isPrayerPlaying = false;
    },
    playRosary: state => {
      TrackPlayer.play();
      state.isPrayerPlaying = true;
    },
    resetRosary: state => {
      TrackPlayer.pause();
      TrackPlayer.skip(prayers[0].id - 1);

      Object.assign(state, initialValues);
    },
  },
});

export const {
  nextRosaryPrayer,
  previousRosaryPrayer,
  pauseRosary,
  playRosary,
  resetRosary,
} = prayersSlice.actions;
export default prayersSlice.reducer;
