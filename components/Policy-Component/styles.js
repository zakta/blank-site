import styled from 'styled-components';

export const Container = styled.section`
  margin: 1.5rem;
  padding: 1rem;
  background: #fff;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  h2{
    margin: 0;
    font-size: 25px;
  }
`;

export const BtnClose = styled.button`
  border: 1px solid #b6b6b6;
  background: #f3f3f3;
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin: auto 0;
  cursor: pointer;

  .close{
    font-size: 20px;
  }
`;

export const ContentPolicy = styled.div`
  margin: 1rem 0;
`;
