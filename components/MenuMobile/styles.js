import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35px;
  margin: 1rem 1.5rem;
  cursor: pointer;
  z-index: 12;


  @media(min-width: 900px){
    display: none;
  }
`;

export const Hamburguer = styled.div`
  background-color: black;
  height: 0.40rem;
  width: 2.5rem;
  transition: all .4s linear;
  transform-origin: 0px;

  &:nth-child(1){
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    transition: all .4s linear;
  }
  &:nth-child(2){
    transform:${({ open }) => (open ? 'translateX(80%)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? 0 : 1)};
    transition: all .4s linear;
  }
  &:nth-child(3){
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
