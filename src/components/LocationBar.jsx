import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHippo, FiX } from 'react-icons/fi';

const LocationBar = () => {
  let [stateLocationBar, setStateLocationBar] = useState(false);
  return (
    <Box>
      <Label>where</Label>
      <Test state={stateLocationBar}>
        <Input
          type="text"
          placeholder="Anywhere"
          onFocus={() => setStateLocationBar(true)}
          onBlur={() => setStateLocationBar(false)}
        />
        <XButton />
      </Test>
    </Box>
  );
};

export default LocationBar;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Test = styled.div`
  border: 1px solid ${({ state }) => (state ? `#008489` : '#e3e3e3')};

  width: 100%;
  letter-spacing: normal;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.4rem;
  display: flex;
  border-radius: 0.4rem;
`;

const Input = styled.input`
  width: 100%;
  color: #484848;
  letter-spacing: normal;
  font-size: 1.8rem;
  font-weight: 300;

  border-radius: 0.4rem;

  border: none;
  outline: none;
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

const XButton = styled(FiX)`
  color: grey;
`;
