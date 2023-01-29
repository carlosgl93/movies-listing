// React & dependencies
import {useEffect, useState} from 'react';

// Material Components

// My components
import moviesDB from '../api/moviesDB';

// Queries & Mutations

// Typescript
import {Cast, CreditsResponse} from '../interfaces/cast';
import {MovieFull} from '../interfaces/movieFull';
interface MovieDetailsState {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}
const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetailsState>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const fullMoviePromise = await moviesDB.get<MovieFull>(`/${movieId}`);
    const creditsPromise = await moviesDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, castResp] = await Promise.all([
      fullMoviePromise,
      creditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
export default useMovieDetails;
