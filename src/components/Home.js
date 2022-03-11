import React from "react";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
//components
import HeroImage from "./HeroImage";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//image
import noImage from '../images/no_image.jpg'
import Grid from "./Grid";

const Home = () => {
  const { state, loading, error, searchTerm, setIsLoadingMore, setSearchTerm } = useHomeFetch()

  const listOfMovies = state.results.map(movie => (
    <Thumb
      key={movie.id}
      clickable
      image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage}
      movieId={movie.id}
    />))

  if (error) return <div>Something Went Wrong...</div>

  return (
    <>
      {!searchTerm && state.results[0] && <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].title}
        text={state.results[0].overview}
      />}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {listOfMovies}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
      <Button 
      text='Load More' 
      handleClick ={()=> setIsLoadingMore(true)}
      
      />)}
    </>
  );
}

export default Home