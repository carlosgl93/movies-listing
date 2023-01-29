import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

import useMovieDetails from '../hooks/useMovieDetails';
import Loading from '../components/Loading';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      {/* // full screen container */}
      <View style={styles.fullContainer}>
        {/* container for the movie poster */}
        <View style={styles.imageContainer}>
          <Image source={{uri}} style={styles.posterImage} resizeMode="cover" />
        </View>

        <View style={styles.detailsContainer}>
          {/* container for the movie information */}
          <Text style={styles.titles}>{movie.title}</Text>
        </View>

        <View style={styles.detailsContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <MovieDetails movieFull={movieFull!} cast={cast} />
          )}
          {/* <Loading /> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullContainer: {},
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.65,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 30,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  detailsContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  titles: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailScreen;
