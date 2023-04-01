import { FlatList, View } from 'react-native';
import SpaceThumbnail from '../SpaceThumbnail';

export const CellWrapper = ({ children, index, style, item }) => {
  // console.log(`call wrapper : ${item}`);
  return (
    <View
      style={{
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export const dummyData = [
  {
    id: 1,
    title: 'Space 1',
    thumbnail: '',
  },
  {
    id: 2,
    title: 'Space 2',
    thumbnail: '',
  },
  {
    id: 3,
    title: 'Space 3',
    thumbnail: '',
  },
  {
    id: 4,
    title: 'Space 4',
    thumbnail: '',
  },
  {
    id: 5,
    title: 'Space 5',
    thumbnail: '',
  },
  {
    id: 6,
    title: 'Space 6',
    thumbnail: '',
  },
  {
    id: 7,
    title: 'Space 7',

    thumbnail: '',
  },
  {
    id: 8,
    title: 'Space 8',
    thumbnail: '',
  },
  {
    id: 9,
    title: 'Space 9',
    thumbnail: '',
  },
  {
    id: 10,

    title: 'Space 10',
    thumbnail: '',
  },
  {
    id: 11,
    title: 'Space 11',
    thumbnail: '',
  },
];
