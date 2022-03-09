import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from '../../images/search1.svg';

const SearchBar = (props) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      props.setSearchTerm(state)
    }, 1000)

    return () => clearTimeout(timer);
  }, [props.setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type='text'
          placeholder='Search Movie Here'
          onChange={event => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
}

export default SearchBar;