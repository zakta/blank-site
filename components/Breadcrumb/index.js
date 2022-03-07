// 3rd parties
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdArrowRight } from 'react-icons/md';
// Styles
import { Container, Index } from './styles';

function Breadcrumb({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

function BreadcrumbLink({ children, href }) {
  return (
    <Index>
      <Link href={href}>
        {children}
      </Link>
      <MdArrowRight className="arrowRight" />
    </Index>
  );
}
BreadcrumbLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
Breadcrumb.Link = BreadcrumbLink;

function BreadcrumbItem({ children }) {
  return (
    <Index>
      <p>
        {children}
      </p>
    </Index>
  );
}
BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
};
Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
