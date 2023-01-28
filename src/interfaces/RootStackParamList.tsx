import DetailScreen from '../screens/DetailScreen';
import {Movie} from './movieInterface';
export type RootStackParamList = {
  HomeScreen: {id: 0} | undefined;
  DetailScreen: {id: 1} | Movie;
};
