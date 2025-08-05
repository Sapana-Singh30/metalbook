import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 1.5rem;
  background-color: #282c34;
  color: white;
  font-size: 1.5rem;
  text-align: center;
`;

const Header = () => {
  return <HeaderContainer>Expense Tracker</HeaderContainer>;
};

export default Header;
