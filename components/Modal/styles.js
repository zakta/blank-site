// 3rd parties
import Modal from 'react-modal';
import styled from 'styled-components';

export const Container = styled.div`
`;

export const ModalAria = styled(Modal)`
  &.modalStyles {
    background: #ccc;
    margin: 1rem auto;
    width: 399px;
    padding: 1rem;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
`;
export const Btn = styled.button`
  background: white;
  font-weight: 300;
  border:1px solid #c6c6c6;
  align-self: flex-end;
  padding: .5rem;
`;
