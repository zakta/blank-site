// 3rd parties
import Link from 'next/link';
// components
import ContainerCenter from '../ContainerCenter/styles';
// styles
import {
  Container,
  Copyright,
  Info,
  Infos,
} from './styles';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <ContainerCenter className="footer">
        <Infos>
          <Info><Link href="/cookies">Cookies Policy</Link></Info>
          <Info><Link href="/privacy">Privacy Policy</Link></Info>
          <Info><Link href="mailto:something@something.com">something@email.com</Link></Info>
          <Info><Link href="tel:+5511987126345">+5511987126345</Link></Info>
        </Infos>
      </ContainerCenter>
      <Copyright>
        &copy;
        {` ${year} website - all rights are reserved`}
      </Copyright>
    </Container>
  );
}
