import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {EnumMysterium} from '../enums/mysterium.enum';
import {EnumPrayer} from '../enums/prayer.enum';

export interface Prayer {
  audioPath: string;
  id: number;
  image?: FC<SvgProps>;
  name: string;
  latinName: string;
  prayer: string;
  latinPrayer: string;
  type: EnumPrayer;
  mysteriumType?: EnumMysterium;
}
