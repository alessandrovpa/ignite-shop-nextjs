import { HomeContainer, Product } from '@/styles/pages/home';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { stripe } from '@/lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';

interface ProductData {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}
interface HomeProps {
  products: ProductData[];
}

export default function Home({ products }: HomeProps) {
  const [refKeenSlider] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={refKeenSlider} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image
              src={product.imageUrl}
              alt="produto"
              width={520}
              height={480}
            />
            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 8, // 8 horas
  };
};
