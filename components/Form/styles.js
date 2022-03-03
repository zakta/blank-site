// 3rd parties
import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem;

  @media(min-width: 1200px){
    margin: auto;
  }
  .errorMsg{
    color: #e92929;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: .5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function isSuccess(touched) {
  return touched ? '#59c124;' : '#ccc';
}

function validationInput({ touched, error }) {
  return touched && error ? '#e92929' : isSuccess(touched);
}

export const Inputform = styled(InputMask)`
  background: #f6f6f6;
  border: 1px solid ${validationInput};
  padding: .5rem;
  margin-bottom: .5rem;
`;

export const Textarea = styled.textarea`
  background: #f6f6f6;
  border: 1px solid ${validationInput};
  font-family: Arial, Helvetica, sans-serif;
  padding: .5rem;
  margin-bottom: .5rem;
`;

export const BtnSubmit = styled.button`
  align-self: flex-end;
  width: 200px;
  padding: .5rem;


`;
