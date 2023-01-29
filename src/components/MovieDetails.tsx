// React & dependencies
import {FC} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Material Components

// My components

// Queries & Mutations

// Typescript
import {Cast} from '../interfaces/cast';
import {MovieFull} from '../interfaces/movieFull';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
const MovieDetails: FC<Props> = ({movieFull, cast}) => {
  return (
    <View
      style={{
        marginHorizontal: 6.6,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="star" color="yellow" size={20} />
        <Text>
          {movieFull.vote_average.toFixed(2)} / 10 from {movieFull.vote_count}{' '}
          reviews
        </Text>
        <Text> - </Text>

        <Text>
          {movieFull.genres.length > 2
            ? `${movieFull.genres[0].name}, ${movieFull.genres[1].name}...`
            : movieFull.genres.map((g, i) => g.name).join(', ')}
        </Text>
      </View>
      {/* trailer */}
      <Text style={styles.titles}>Synopsis</Text>
      <View style={styles.synopsis}>
        <Text style={{fontSize: 16, marginTop: 10}}>{movieFull.overview}</Text>
      </View>
      {/* Cast */}
      <Text style={styles.titles}>Cast</Text>

      <FlatList
        data={cast}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CastItem actor={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 3.3,
          marginBottom: 100,
          height: 70,
        }}
      />

      {/* <View style={styles.castContainer}>
        {cast.map(actor => (
          <CastItem actor={actor} />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  synopsis: {},
  castContainer: {},
});

export default MovieDetails;
