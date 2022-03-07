// 3rd parties
import Link from 'next/link';
import PropTypes from 'prop-types';
import cookie from 'js-cookie';
// styles
import { Container, CookieNotice } from './styles';

export default function CookieModal({ setAcceptedCookie, isAcceptedCookie }) {
  const createCookies = () => {
    if (cookie.get('allow-cookies') === undefined) {
      cookie.set('allow-cookies', 'true', { expires: 1 });
      setAcceptedCookie(true);
    }
  };
  return (
    <Container hide={isAcceptedCookie}>
      <CookieNotice>
        <p>
          Usamos cookies e métodos semelhantes para reconhecer os visitantes
          e lembrar suas preferências, medir a eficácia da campanha
          publicitária, direcionar anúncios e analisar o tráfego do site.
          Saiba mais acessando nossa
          <span>
            <Link href="/cookies-policy"> Politica de Cookies </Link>
          </span>
          e
          <span>
            <Link href="/privacy-policy"> Política de Privacidade </Link>
          </span>
        </p>
        <button type="button" onClick={() => createCookies()}>Continuar</button>
      </CookieNotice>
    </Container>
  );
}
CookieModal.propTypes = {
  setAcceptedCookie: PropTypes.bool.isRequired,
  isAcceptedCookie: PropTypes.bool.isRequired,
};
