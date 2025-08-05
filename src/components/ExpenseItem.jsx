import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteExpense, setEditingExpense } from '../redux/expensesSlice';

const Item = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 600;
`;

const Category = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const Amount = styled.span`
  font-weight: bold;
  color: #0a8;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.4rem 0.6rem;
    border: none;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .edit {
    background-color: #f0c14b;
  }

  .delete {
    background-color: #ff4d4f;
    color: white;
  }
`;

const ExpenseItem = ({ expense, openModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(expense.id));
  };

  const handleEdit = () => {
    dispatch(setEditingExpense(expense));
    openModal(); 
  };

  return (
    <Item>
      <Info>
        <Title>{expense.title}</Title>
        <Category>{expense.category} | {expense.date}</Category>
      </Info>
      <Amount>₹{expense.amount}</Amount>
      <Actions>
        <button className="edit" onClick={handleEdit}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </Actions>
    </Item>
  );
};

export default ExpenseItem;