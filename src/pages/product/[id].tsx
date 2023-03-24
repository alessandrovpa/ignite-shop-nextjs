import { stripe } from '@/lib/stripe';
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from '@/styles/pages/product';
import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Stripe from 'stripe';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckout(true);
      const response = await axios.post(`/api/checkout`, {
        priceId: product.defaultPriceId,
      });
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      setIsCreatingCheckout(false);
      alert('Falha no checkout!');
    }
  }

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ProductImage>
          <Image src={product.imageUrl} alt="camisa" width={520} height={480} />
        </ProductImage>
        <ProductInfo>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <button onClick={handleBuyProduct} disabled={isCreatingCheckout}>
            Comprar agora
          </button>
        </ProductInfo>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
