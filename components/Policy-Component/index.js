// 3rd parties
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
// styles
import {
  BtnClose,
  Container,
  Content,
  ContentPolicy,
} from './styles';

function PolicyComponent({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
PolicyComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

function PolicyTitle({ children }) {
  return (
    <Content>
      <h2>{children}</h2>
      <Link href="/">
        <BtnClose>
          <GrClose className="close" />
        </BtnClose>
      </Link>
    </Content>
  );
}
PolicyTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

PolicyComponent.PolicyTitle = PolicyTitle;

function PolicyContent({ children }) {
  return (
    <ContentPolicy>
      {children}
    </ContentPolicy>
  );
}
PolicyContent.propTypes = {
  children: PropTypes.node.isRequired,
};
PolicyComponent.PolicyContent = PolicyContent;

export default PolicyComponent;
