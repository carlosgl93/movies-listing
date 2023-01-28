// React & dependencies
import {FC} from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
// Material Components

// My components
import MovieCard from './MovieCard';

// Queries & Mutations

// Typescript
interface Props {
  title: string;
  listData: any;
}

const screenHeight = Dimensions.get('screen').height;

const HorizontalMovieList: FC<Props> = ({title, listData}) => {
  return (
    <View
      style={{
        height: screenHeight * 0.29,
        marginVertical: screenHeight * 0.005,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <FlatList
        data={listData}
        renderItem={({item}: any) => (
          <MovieCard movie={item} height={screenHeight * 0.27} width={120} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default HorizontalMovieList;
