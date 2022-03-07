// 3rd parties
import PropTypes from 'prop-types';
import 'react-spring-bottom-sheet/dist/style.css';

// styles
const {
  Container, SheetContent, ModalBottom, BtnClose,
} = require('./styles');

const ModalMobile = function BottomSheetModal({ activeModal, setActiveModal, children }) {
  return (
    <Container>
      <ModalBottom
        open={activeModal}
        onDismiss={() => setActiveModal(false)}
        snapPoints={({ minHeight }) => minHeight}
      >
        <SheetContent>
          {children}
        </SheetContent>
        <BtnClose type="button" onClick={() => setActiveModal(false)}>Fechar</BtnClose>
      </ModalBottom>
    </Container>
  );
};
ModalMobile.propTypes = {
  activeModal: PropTypes.bool.isRequired,
  setActiveModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default ModalMobile;
