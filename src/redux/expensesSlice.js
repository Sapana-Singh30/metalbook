import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  editingExpense: null,
  searchTerm: '',
  selectedDate: '',
  amountFilter: '',
  isModalOpen: false,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        id: nanoid(),
        ...action.payload,
      };
      state.expenses.unshift(newExpense);
    },

    updateExpense: (state, action) => {
      const index = state.expenses.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
      state.editingExpense = null;
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((e) => e.id !== action.payload);
    },

    setEditingExpense: (state, action) => {
      state.editingExpense = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },

    setAmountFilter: (state, action) => {
      state.amountFilter = action.payload;
    },

    toggleModal: (state, action) => {
      state.isModalOpen = action.payload;
    },

    clearEditingExpense: (state) => {
      state.editingExpense = null;
    },
  },
});

export const {
  addExpense,
  updateExpense,
  deleteExpense,
  setEditingExpense,
  setSearchTerm,
  setSelectedDate,
  setAmountFilter,
  toggleModal,
  clearEditingExpense,
} = expensesSlice.actions;

export default expensesSlice.reducer;

export const selectFilteredExpenses = (state) => {
  const { expenses, searchTerm, selectedDate, amountFilter } = state.expenses;

  return expenses.filter((exp) => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase());

    const expenseDate = new Date(exp.date).toISOString().split('T')[0];
    const matchesDate = !selectedDate || expenseDate === selectedDate;

    const matchesAmount =
      !amountFilter || parseFloat(exp.amount) === parseFloat(amountFilter);

    return matchesSearch && matchesDate && matchesAmount;
  });
};