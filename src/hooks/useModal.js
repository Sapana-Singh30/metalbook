import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/expensesSlice';

const useModal = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleModal(true));
  };

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  return { openModal, closeModal };
};

export default useModal;