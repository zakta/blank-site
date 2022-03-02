import styled from 'styled-components';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Btn } from '../Modal/styles';

export const Container = styled.div`
  display: flex;
`;

export const ModalBottom = styled(BottomSheet)`
  [data-rsbs-content]{
    display: flex;
    flex-direction: column;
  }
`;
export const SheetContent = styled.div`

`;
export const BtnClose = styled(Btn)`
  align-self: center;
  width: 200px;
  border-radius: 10px;
`;
