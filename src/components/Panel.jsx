import React, { useState } from 'react';
import styled from 'styled-components';
import GuestsMenu from './guest/GuestsMenu';
import LocationBar from './LocationBar';
import DatesSelection from './DatesSelection';

const Panel = () => {
  let [stateSearchButton, setStateSearchButton] = useState(true);
  const activateGuestBar = () => {
    setStateSearchButton(!stateSearchButton);
  };
  return (
    <Box>
      <Title>Book unique places to stay and things to do.</Title>
      <LocationBar />
      <DatesSelection />
      <GuestsMenu callBack={activateGuestBar} />
      {stateSearchButton ? <SearchButton>Search</SearchButton> : null}
    </Box>
  );
};

export default Panel;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 44rem;
  height: 48rem;
  background: white;
  border-radius: 0.4rem;
  padding: 3.2rem;
  padding-bottom: 2.4rem;
  box-shadow: 0 1.6rem 40px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  color: grey;
  letter-spacing: normal;
  font-size: 3.2rem;
  font-weight: 600;
`;

const SearchButton = styled.button`
  background: #ff5a5f;
  color: white;
  text-transform: capitalize;
  padding: 1.5rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: normal;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 3.2rem;
`;
