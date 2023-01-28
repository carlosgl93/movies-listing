// React & dependencies
import {FC} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {
  data: any;
}
const MainCarousel: FC<Props> = ({data}) => {
  const {width: windowWidth} = Dimensions.get('window');

  return (
    <View
      style={{
        height: 440,
      }}>
      <Carousel
        data={data}
        renderItem={({item}: any) => <MovieCard movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
      />
    </View>
  );
};
export default MainCarousel;
