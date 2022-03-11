import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useParams } from "react-router-dom";

import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId } = useParams();
  const { movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />
  if (error) return <div>Something Went Wrong...</div>

  const movieActors = movie.actors.map(actor => <Actor
    key={actor.credit_id}
    imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
    name={actor.name}
    character={actor.character}
  />)

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar movie={movie} />
      <Grid header="Actors">
        {movieActors}
      </Grid>
    </>
  );
}

export default Movie;