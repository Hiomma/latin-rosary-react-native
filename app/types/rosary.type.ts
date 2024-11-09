import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export interface Rosary {
  id: number;
  name: string;
  latinName: string;
  simplifiedName: string;
  description: string;
  image: FC<SvgProps>;
  isToday?: boolean;
}
