import React, { useEffect, useState } from "react";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
//components
import HeroImage from "./HeroImage";
import Thumb from "./Thumb";

//hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//image
import noImage from '../images/no_image.jpg'
import Grid from "./Grid";

const Home = () => {
  const { state, loading, error } = useHomeFetch()

  console.log('state:', state)

  const listOfMovies = state.results.map(movie => (
    <Thumb
      key={movie.id}
      clickable
      image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage}
      movieId={movie.id}
    />))

  return (
    <>
      {state.results[0] && <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].title}
        text={state.results[0].overview}
      />}
      <Grid header='Popular Movies'>
        {listOfMovies}
      </Grid>
    </>
  );
}

export default Home