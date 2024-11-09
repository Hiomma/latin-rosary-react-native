import {createSlice} from '@reduxjs/toolkit';
import Coracao from '../../../assets/icons/coracao.svg';
import Cruz from '../../../assets/icons/cruz.svg';
import Eucaristia from '../../../assets/icons/eucaristia.svg';
import Nascimento from '../../../assets/icons/nascimento.svg';
import {EnumMysterium} from '../../enums/mysterium.enum';

const day = new Date().getDay();

export const rosaries = [
  {
    description: 'Seg/Sáb',
    id: 1,
    image: Nascimento,
    name: 'Mistérios Gozosos',
    latinName: 'Mysteria Gaudiosa',
    simplifiedName: 'Mist. Gozosos',
    misteriumType: EnumMysterium.GAUDIOSA,
    isToday: [1, 6].includes(day),
  },
  {
    description: 'Ter/Sex',
    id: 2,
    image: Cruz,
    name: 'Mistérios Dolorosos',
    latinName: 'Mysteria Dolorosa',
    simplifiedName: 'Mist. Dolorosos',
    misteriumType: EnumMysterium.DOLOROSA,
    isToday: [2, 5].includes(day),
  },
  {
    description: 'Qua/Dom',
    id: 3,
    image: Coracao,
    name: 'Mistérios Gloriosos',
    latinName: 'Mysteria Gloriosa',
    simplifiedName: 'Mist. Gloriosos',
    misteriumType: EnumMysterium.GLORIOSA,
    isToday: [0, 3].includes(day),
  },
  {
    description: 'Qui',
    id: 4,
    image: Eucaristia,
    name: 'Mistérios Luminosos',
    latinName: 'Mysteria Luminosa',
    simplifiedName: 'Mist. Luminosos',
    misteriumType: EnumMysterium.LUMINOSA,
    isToday: day === 4,
  },
];

export const rosariesSlice = createSlice({
  name: 'home',
  initialState: {
    isTabBarVisible: true,
  },
  reducers: {
    showTabBar: state => {
      state.isTabBarVisible = true;
    },
    hideTabBar: state => {
      state.isTabBarVisible = false;
    },
  },
});

export const {showTabBar, hideTabBar} = rosariesSlice.actions;
export default rosariesSlice.reducer;
