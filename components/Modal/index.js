// 3rd parties
import PropTypes from 'prop-types';

// styles
import { Btn, Container, ModalAria } from './styles';

const Modal = function ModalComponent({ activeModal, setActiveModal, children }) {
  return (
    activeModal
      && (
        <Container>
          <ModalAria
            ariaHideApp={false}
            isOpen={activeModal}
            onRequestClose={() => setActiveModal(false)}
            contentLabel="Example Modal"
            className="modalStyles"
          >
            <div className="container">
              {children}
              <Btn
                type="button"
                onClick={() => setActiveModal(false)}
              >
                Fechar
              </Btn>
            </div>
          </ModalAria>
        </Container>
      )
  );
};

Modal.propTypes = {
  activeModal: PropTypes.bool.isRequired,
  setActiveModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
