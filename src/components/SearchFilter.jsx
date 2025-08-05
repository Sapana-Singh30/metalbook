import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedDate, setAmountFilter } from '../redux/expensesSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.4rem;
  color: #333;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  input {
    flex: 1;
    padding: 0.6rem 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.95rem;
    min-width: 160px;
  }
`;

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { searchTerm, selectedDate, amountFilter } = useSelector((state) => state.expenses);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleDateChange = (e) => {
    dispatch(setSelectedDate(e.target.value));
  };

  const handleAmountChange = (e) => {
    dispatch(setAmountFilter(e.target.value));
  };

  return (
    <Wrapper>
      <Title>Recent Transactions</Title>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
         <input
          type="number"
          placeholder="Filter by amount..."
          value={amountFilter}
          onChange={handleAmountChange}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
       
      </FilterContainer>
    </Wrapper>
  );
};

export default SearchFilter;