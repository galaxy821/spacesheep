import { FlatList, View } from 'react-native';
import SpaceThumbnail from '../\bSpaceThumbnail';

const SpaceListSection = () => {
  const renderItem = SpaceThumbnail;

  const data = [
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
  ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default SpaceListSection;

export const CellWrapper = ({ children, index, style, item }) => {
  // console.log(`call wrapper : ${item}`);
  return (
    <View
      style={{
        margin: 10,
        padding: 10,
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
];
