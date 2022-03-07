import styled from 'styled-components';

export const Container = styled.div`
  background: #efefef;
  bottom: 0;
  box-sizing: border-box;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  font-size: 15px;
  justify-content: center;
  position: fixed;
  z-index: 13;
  width: 100%;
`;

export const CookieNotice = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 1rem;

  p{
    font-size: 15px;
  }
  a{
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  button{
    padding: 1rem 2rem;
    background: #b3b3b3;
    border: none;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    margin-top: 1rem;
    cursor: pointer;

    @media(min-width: 400px){
      max-width: 275px;
   }
  }

  @media(min-width: 900px){
    flex-direction: row;
    padding: 0 2rem;
    button{
      align-self: center;
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }
`;
