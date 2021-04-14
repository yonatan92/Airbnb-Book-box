import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHippo, FiX } from 'react-icons/fi';
import useLocationGoogle from '../hooks/useLocationGoogle';

const LocationBar = () => {
  const [suggest, loaded, error] = useLocationGoogle();
  let [stateLocationBar, setStateLocationBar] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const handleChange = async (event) => {
    const location = event.target.value;
    if (location) {
      const predictionsResult = await suggest(location);

      setPredictions(predictionsResult);
    } else {
      setPredictions([]);
    }
  };
  return (
    <Box>
      <Label>where</Label>
      <Test state={stateLocationBar}>
        <Input
          type="text"
          placeholder="Anywhere"
          onFocus={() => setStateLocationBar(true)}
          onBlur={() => setStateLocationBar(false)}
          onChange={(e) => handleChange(e)}
        />
        <XButton />
      </Test>

      {predictions.length > 0 &&
        predictions.map(({ description }) => (
          <SinglePredictionBox>{description}</SinglePredictionBox>
        ))}
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

const SinglePredictionBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2rem;
  margin: 1rem 0;
`;
