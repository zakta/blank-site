import styled from 'styled-components';

export const Container = styled.section`
  background: #efefef;

  .footer{
    margin-bottom: 0;
  }
`;

export const Infos = styled.ul`
  display: flex;
  flex-direction: columm;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  margin: 0;

  @media(min-width: 900px){
    flex-direction: row;
    justify-content: flex-end;
  }
  `;

export const Info = styled.li`
  padding: .5rem;
  text-align: center;
  list-style-type: none;

  a{
    font-size: 13px;
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
`;

export const Copyright = styled.p`
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 600;
  margin: 0px;
  text-align: center;
  text-transform: capitalize;
  background: #b6b6b6;
  padding: .5rem;
`;
