import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { CartModal } from './CartModal';
import { HeaderContainer, OpenModalButton } from './header';
import { useCart } from '@/hooks/useCart';

import logoImg from '../assets/Logo.svg';
import cartIcon from '../assets/cart.svg';

export function Header() {
  const { products } = useCart();
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="ignite shop logo" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <OpenModalButton>
            <Image src={cartIcon} alt="" />
            {products.length > 0 && <span>{products.length}</span>}
          </OpenModalButton>
        </Dialog.Trigger>
        <CartModal />
      </Dialog.Root>
    </HeaderContainer>
  );
}
