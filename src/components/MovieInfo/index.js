import React from "react";
import { Content, Wrapper, Text } from "./MovieInfo.styles";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from '../../images/no_image.jpg';


const MovieInfo = (props) => {
  return (
    <Wrapper backdrop={props.movie.backdrop_path} >
      <Content>
        <Thumb image={props.movie.poster_path ?
          `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
          : NoImage
        }
          clickable={false}
        />

        <Text>
          <h1>{props.movie.title}</h1>
          <h3>PLOT</h3>
          <p>{props.movie.overview}</p>

          <div className="rating-directors" >
            <div>
              <h3>RATING</h3>
              <div className="score" >
                {props.movie.vote_average}
              </div>
            </div>
            <div className="director">
              <h3>DIRECTOR{props.movie.directors.length > 1 ? 'S' : ''}</h3>
              {props.movie.directors.map(director =>
                <p key={director.credit_id}>{director.name}</p>
              )}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
}

export default MovieInfo;