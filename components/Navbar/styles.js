import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media(min-width: 900px){
    max-width: 900px;
  }
  `;

export const NavBar = styled.ul`
  background: #b6b6b6;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-top: 2rem;
  position: fixed;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: -17px;
  text-align: center;
  width: 100%;
  z-index: ${({ open }) => (open ? '11' : '0')};
  @media(min-width: 900px){
    flex-direction: row;
    position: initial;
    transform: initial;
    background: none;
    margin: 0;
    padding: 2rem;
    width: initial;
    top: initial;
    right: initial;
    z-index: initial;
    text-align: initial;

  }

`;

export const Item = styled.li`
  margin: 1.5rem;
  list-style-type: none;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 700;
    font-size: 25px;

    @media(min-width: 900px){
      font-size: 18px;
      font-weight: 500;
    }
  }

  @media(min-width: 900px){
    margin: 0 10px;
  }
`;
