import React from "react";
import { Wrapper, Content } from "./MovieInfoBar.styles";
import { calcTime, convertMoney } from '../../helpers'

const MovieInfoBar = props => {
  return (
    <Wrapper>
      <Content>
        <div className="column" >
          <p>Runnig time: {calcTime(props.movie.runtime)}</p>
        </div>
        <div className="column" >
          <p>Budget: {convertMoney(props.movie.budget)}</p>
        </div>
        <div className="column" >
          <p>Votes: {props.movie.vote_count}</p>
        </div>
        <div className="column" >
          <p>Genre:&nbsp;</p>
          {props.movie.genres.map(genre =>
            <p key={genre.id}>{genre.name}&nbsp;</p>
          )}
        </div>

      </Content>
    </Wrapper>
  );
}

export default MovieInfoBar;