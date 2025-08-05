import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpense,
  updateExpense,
  toggleModal,
  setEditingExpense,
} from '../redux/expensesSlice';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => (props.cancel ? '#eee' : '#007bff')};
  color: ${(props) => (props.cancel ? '#333' : '#fff')};
`;

const AddExpenseModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, editingExpense } = useSelector((state) => state.expenses);

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Entertainment',
    date: '',
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData(editingExpense);
    } else {
      setFormData({
        title: '',
        amount: '',
        category: 'Entertainment',
        date: '',
      });
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editingExpense) {
      dispatch(updateExpense(formData));
    } else {
      dispatch(addExpense(formData));
    }
    closeModal();
    setFormData({
        title: '',
        amount: '',
        category: 'Entertainment',
        date: '',
      });
  };

  const closeModal = () => {
    dispatch(toggleModal(false));
    dispatch(setEditingExpense(null));
  };

  if (!isModalOpen) return null;

  return (
    <Backdrop onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h3>{editingExpense ? 'Edit Expense' : 'Add Expense'}</h3>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <Input
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          type="number"
        />
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </Select>
        <Input
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
        />

        <ButtonGroup>
          <Button cancel onClick={closeModal}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {editingExpense ? 'Update' : 'Add'}
          </Button>
        </ButtonGroup>
      </Modal>
    </Backdrop>
  );
};

export default AddExpenseModal;