import React, { useEffect, useState } from "react";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
//components

//hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//image
import noImage from '../images/no_image.jpg'

const Home = () => {
  const { state, loading, error } = useHomeFetch()

  console.log('state:', state)
  return (
    <div>
      Home page
    </div>
  );
}

export default Home