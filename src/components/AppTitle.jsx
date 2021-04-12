import React from 'react';
import styled from 'styled-components';

const AppTitle = () => (
  <>
    <MainTitle>
      <Logo src="https://44t1j.csb.app/icons/airbnb.svg" alt="Airbnb logo" />
      Airbnb Search Box
    </MainTitle>
  </>
);
export default AppTitle;

const MainTitle = styled.h1`
  color: grey;
  letter-spacing: normal;
  font-size: 3.2rem;
  font-weight: 600;
  font-size: 2.6rem;
  margin: 2.6rem;
`;

const Logo = styled.img`
  width: 4rem;
  margin-right: 2rem;
  margin-bottom: -0.8rem;
`;
