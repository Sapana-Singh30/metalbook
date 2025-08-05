import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const Card = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 10px;
  min-width: 150px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const SummaryCard = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <CardContainer>
      <Card>
        <h4>Total Expenses</h4>
        <p>₹{total}</p>
      </Card>
    </CardContainer>
  );
};

export default SummaryCard;
