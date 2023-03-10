import React from 'react';
import {useMovies} from '../hooks/useMovies';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions, View, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import HorizontalMovieList from '../components/HorizontalMovieList';
import MainCarousel from '../components/MainCarousel';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top - 15}}>
        <MainCarousel data={nowPlaying} />
        <HorizontalMovieList title="Top Rated Movies" listData={topRated} />
        <HorizontalMovieList title="Popular Movies" listData={popular} />
        <HorizontalMovieList title="Upcoming Movies" listData={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
