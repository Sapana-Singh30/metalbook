import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteExpense,
  setEditingExpense,
  toggleModal,
  selectFilteredExpenses,
} from '../redux/expensesSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin: 0;
`;

const AddButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.2rem;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.delete ? '#ff4d4d' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  padding: 0.3rem 0.7rem;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? '#007bff' : '#f9f9f9')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const ITEMS_PER_PAGE = 4;

const ExpenseList = () => {
  const dispatch = useDispatch();
  const filteredExpenses = useSelector(selectFilteredExpenses);

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredExpenses.length]);

  const totalPages = Math.ceil(sortedExpenses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExpenses = sortedExpenses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleEdit = (expense) => {
    dispatch(setEditingExpense(expense));
    dispatch(toggleModal(true));
  };

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  const handleAddClick = () => {
    dispatch(setEditingExpense(null));
    dispatch(toggleModal(true));
  };

  return (
    <Wrapper>
      <Header>
        <Title>Expenses</Title>
      </Header>

      {currentExpenses.length === 0 ? (
        <p style={{ marginTop: '1rem' }}>No expenses found.</p>
      ) : (
        <>
          <List>
            {currentExpenses.map((expense) => (
              <Item key={expense.id}>
                <Info>
                  <span><Label>Title:</Label> {expense.title}</span>
                  <span><Label>Amount:</Label> ₹{expense.amount}</span>
                  <span><Label>Category:</Label> {expense.category}</span>
                  <span><Label>Date:</Label> {expense.date}</span>
                </Info>
                <Buttons>
                  <Button onClick={() => handleEdit(expense)}>Edit</Button>
                  <Button delete onClick={() => handleDelete(expense.id)}>Delete</Button>
                </Buttons>
              </Item>
            ))}
          </List>

          {totalPages > 1 && (
            <Pagination>
              {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                  key={i + 1}
                  active={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PageButton>
              ))}
            </Pagination>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default ExpenseList;