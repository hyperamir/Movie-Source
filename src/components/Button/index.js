import React from "react";
import { Wrapper } from "./Button.styles";

const Button = (props) => {
  return (
    <Wrapper onClick={props.handleClick}>
      {props.text}
    </Wrapper>
  );
}

export default Button;