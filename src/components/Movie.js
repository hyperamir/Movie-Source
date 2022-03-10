import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useParams } from "react-router-dom";

import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId } = useParams();
  const { movie, loading, error } = useMovieFetch(movieId);

  if(loading) return <Spinner />
  if(error) return <div>Something Went Wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie}/>
    </>
  );
}

export default Movie;