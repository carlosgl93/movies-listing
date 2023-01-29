// React & dependencies
import {FC} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

// Material Components

// My components

// Queries & Mutations

// Typescript
import {Cast} from '../interfaces/cast';

interface Props {
  actor: Cast;
}
const CastItem: FC<Props> = ({actor}) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: 3.3,
          marginTop: 3.3,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            opacity: 0.7,
            overflow: 'hidden',
          }}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 60,
    borderRadius: 10,
    marginRight: 10,
    paddingRight: 10,
    paddingTop: 5,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default CastItem;
