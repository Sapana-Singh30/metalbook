import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, clearEditingExpense } from '../redux/expensesSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TotalExpenses = () => {
  const dispatch = useDispatch();
  const expenses= useSelector((state) => state.expenses.expenses);

  const total = expenses.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );

  const handleAddExpenseClick = () => {
    dispatch(clearEditingExpense()); 
    dispatch(toggleModal(true));   
  };

  return (
    <Wrapper>
      <Title>Expenses: ₹{total}</Title>
      <Button onClick={handleAddExpenseClick}>Add Expense</Button>
    </Wrapper>
  );
};

export default TotalExpenses;