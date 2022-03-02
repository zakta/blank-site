import Link from 'next/link';
import { useState } from 'react';
import MenuMobile from '../MenuMobile';
import { Container, Item, NavBar } from './styles';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <NavBar open={open}>
        <Item>
          <Link href="/">
            Home
          </Link>
        </Item>
        <Item>
          <Link href="/">
            Services
          </Link>
        </Item>
        <Item>
          <Link href="/">
            About
          </Link>
        </Item>
        <Item>
          <Link href="/">
            Contact
          </Link>
        </Item>
      </NavBar>
      <MenuMobile open={open} setOpen={setOpen} />
    </Container>
  );
}
