import { useEffect, useState } from "react";
import API from '../API';

export const useMovieFetch = movieId => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const currentMovie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(member => member.job ==='Director');

        setMovie({
          ...currentMovie,
          actors: credits.cast,
          directors
        })
        setLoading(false);

      } catch (error) {
        setError(true)
      }

    }
    fetchMovie();

  }, [movieId]);

  return { movie, loading, error };

}