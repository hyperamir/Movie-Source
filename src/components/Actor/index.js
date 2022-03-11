import React from "react";
import { Wrapper, Image } from "./Actor.styles";

const Actor = (props) => {
  return (
    <Wrapper>
      <Image src={props.imageUrl} alt="actor-thumb" />
      <h3>{props.name}</h3>
      <p>{props.character}</p>
    </Wrapper>
  );
}

export default Actor;