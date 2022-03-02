// 3rd parties
import PropTypes from 'prop-types';
import 'react-spring-bottom-sheet/dist/style.css';

// styles
const {
  Container, SheetContent, ModalBottom, BtnClose,
} = require('./styles');

const ModalMobile = function BottomSheetModal({ activeModal, setActiveModal }) {
  return (
    <Container>
      <ModalBottom
        open={activeModal}
        onDismiss={() => setActiveModal(false)}
        snapPoints={({ minHeight }) => minHeight}
      >
        <SheetContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec aliquet, nulla vel ultrices faucibus, lacus nisi luctus
            libero, in facilisis quam nibh ac leo. Vestibulum vestibulum
            suscipit erat, nec consectetur odio ultricies accumsan. Ut a
            sollicitudin urna, in rhoncus ex. Duis pulvinar scelerisque congue.
            Aliquam laoreet consequat varius. Donec placerat ipsum ut ex mollis
            molestie. Mauris a interdum enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec aliquet, nulla vel ultrices faucibus, lacus nisi luctus
            libero, in facilisis quam nibh ac leo. Vestibulum vestibulum
            suscipit erat, nec consectetur odio ultricies accumsan. Ut a
            sollicitudin urna, in rhoncus ex. Duis pulvinar scelerisque congue.
            Aliquam laoreet consequat varius. Donec placerat ipsum ut ex mollis
            molestie. Mauris a interdum enim.
          </p>
        </SheetContent>
        <BtnClose type="button" onClick={() => setActiveModal(false)}>Fechar</BtnClose>
      </ModalBottom>
    </Container>
  );
};
ModalMobile.propTypes = {
  activeModal: PropTypes.bool.isRequired,
  setActiveModal: PropTypes.func.isRequired,
};
export default ModalMobile;
