// React & dependencies
import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
// Material Components

// My components
import MovieCard from './MovieCard';

// Queries & Mutations

// Typescript
interface Props {
  title: string;
  listData: any;
}
const HorizontalMovieList: FC<Props> = ({title, listData}) => {
  return (
    <View
      style={{
        height: 200,
      }}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          marginTop: 10,
          backgroundColor: 'red',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
          }}>
          {title}
        </Text>
      </View>
      <FlatList
        data={listData}
        renderItem={({item}: any) => (
          <MovieCard movie={item} height={200} width={120} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default HorizontalMovieList;
