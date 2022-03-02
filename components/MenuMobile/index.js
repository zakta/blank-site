import PropTypes from 'prop-types';
import { Container, Hamburguer } from './styles';

export default function MenuMobile({ setOpen, open }) {
  return (
    <Container onClick={() => setOpen(!open)}>
      <Hamburguer open={open} />
      <Hamburguer open={open} />
      <Hamburguer open={open} />
    </Container>
  );
}
MenuMobile.propTypes = {
  setOpen: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
};
