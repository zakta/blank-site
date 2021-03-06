// 3rd parties
import { useState } from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
// components
import Modal from '../Modal';
import ModalMobile from '../ModalMobile';
// styles
import { Btn } from '../Modal/styles';

export default function ModalResponsive({ children }) {
  const [activeModal, setActiveModal] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Media queries={{ small: '( max-width: 599px)', medium: '(min-width: 600px)' }}>
        { (matches) => (
          <>
            {matches.small
            && (
            <>
              <Btn type="button" onClick={() => setOpen(true)}>Abrir Mobile</Btn>
              <ModalMobile activeModal={open} setActiveModal={setOpen}>
                {children}
              </ModalMobile>
            </>
            )}
            {matches.medium
            && (
            <>
              <Btn type="button" onClick={() => setActiveModal(true)}>Abrir Desktop</Btn>
              <Modal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                ariaHideApp={false}
              >
                {children}
              </Modal>
            </>
            )}
          </>
        )}
      </Media>
    </div>
  );
}
ModalResponsive.propTypes = {
  children: PropTypes.node.isRequired,
};
