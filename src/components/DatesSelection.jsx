import React, { useState } from 'react';
import styled from 'styled-components';

const DatesSelection = () => {
  let [stateCheckIn, setStateCheckIn] = useState(false);
  let [stateCheckOut, setStateCheckOut] = useState(false);
  return (
    <Box>
      <HalfBox>
        <Label>check-in</Label>
        <DateBox
          state={stateCheckIn}
          onFocus={() => setStateCheckIn(true)}
          onBlur={() => setStateCheckIn(false)}
          placeholder="mm/dd/yyyy"
        />
      </HalfBox>
      <HalfBox>
        <Label>checkout</Label>
        <DateBox
          state={stateCheckOut}
          onFocus={() => setStateCheckOut(true)}
          onBlur={() => setStateCheckOut(false)}
          placeholder="mm/dd/yyyy"
        />
      </HalfBox>
    </Box>
  );
};

export default DatesSelection;

const DateBox = styled.input`
  width: 100%;
  letter-spacing: normal;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.4rem;
  outline: none;
  border: 1px solid ${({ state }) => (state ? `#008489` : '#e3e3e3')};
  border-radius: 0.4rem;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const HalfBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Label = styled.h4`
  color: grey;
  letter-spacing: normal;
  letter-spacing: 0.5px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;
