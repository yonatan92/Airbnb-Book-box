import React, { useState } from 'react';
import styled from 'styled-components';

function GuestMenuItem({ type, amount, title, subTitle, cb } = {}) {
  let [isValidAmount, setIsValidAmount] = useState(amount < 1 ? false : true);
  const handleClick = (sign) => {
    switch (sign) {
      case '-':
        setIsValidAmount(amount - 1 < 1 ? false : true);
        cb(type, amount - 1);
        break;
      case '+':
        setIsValidAmount(amount + 1 < 1 ? false : true);
        cb(type, amount + 1);
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <TitleBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleBox>

      <Counter>
        <Button
          color={'red'}
          valid={isValidAmount}
          onClick={() => handleClick('-')}
        />
        {amount}
        <Button color={'green'} onClick={() => handleClick('+')} />
      </Counter>
    </Box>
  );
}

export default GuestMenuItem;

const Box = styled.div`
  width: 100%;
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2rem;
  margin: 1rem 0;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-weight: 600;
  text-transform: capitalize;
`;

const SubTitle = styled.div`
  font-weight: 300;
  text-transform: capitalize;
  padding-top: 4px;
`;

const Counter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  color: ${({ color }) => color};
  border: 2px solid ${({ color }) => color};

  background: white;
  border-radius: 50%;
  width: 3.4rem;
  height: 3.4rem;
  outline: none;
  font-size: 1.4rem;
  font-weight: 100;

  opacity: ${({ valid, color }) =>
    color == 'green' ? 1 : valid && color == 'red' ? 1 : 0.3};
  cursor: ${({ valid, color }) =>
    valid && color === 'red' ? 'pointer' : 'default'};
`;
