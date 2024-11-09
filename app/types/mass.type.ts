import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export type Mass = {
  name: string;
  id: number;
  image: FC<SvgProps>;
  description: string;
  pages: {
    id: number;
    title: string;
    content: string;
  }[];
};
