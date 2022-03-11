import React from "react";
import { Wrapper, Image } from "./Actor.styles";
import PropTypes from 'prop-types'

const Actor = (props) => {
  const {imageUrl,name,character} = props
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}
Actor.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string
}

export default Actor;