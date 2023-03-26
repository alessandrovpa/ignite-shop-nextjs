import { CloseButton, Content, Footer, Overlay, ProductItem } from './modal';
import * as Dialog from '@radix-ui/react-dialog';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';

export function CartModal() {
  const { products, finishCart, removeItem } = useCart();

  const totalPrice = products.reduce((accumulator, product) => {
    return product.price + accumulator;
  }, 0);
  const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice / 100);

  function handleFinishCart() {
    finishCart();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Sacola de Compras</Dialog.Title>
        <CloseButton>X</CloseButton>
        <div>
          <div>
            {products.map((product) => (
              <ProductItem key={product.id}>
                <figure>
                  <Image
                    src={product.imageUrl}
                    alt="product"
                    width={75}
                    height={75}
                  />
                </figure>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.formattedPrice}</p>
                  <button onClick={() => removeItem(product)}>Remover</button>
                </div>
              </ProductItem>
            ))}
          </div>
          <Footer>
            <p>Quantidade: {products.length} itens</p>
            <p>
              <strong>Valor total: {formattedTotalPrice}</strong>
            </p>
            <button onClick={handleFinishCart}>Finalizar compra</button>
          </Footer>
        </div>
      </Content>
    </Dialog.Portal>
  );
}
