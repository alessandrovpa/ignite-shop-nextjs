import { stripe } from '@/lib/stripe';
import { ImageContainer, SuccessContainer } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Stripe from 'stripe';

interface SuccessProps {
  checkoutInfo: {
    customerName: string;
    itemName: string;
    imageUrl: string;
  };
}

export default function Success({ checkoutInfo }: SuccessProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Compra efetuada! | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image
            src={checkoutInfo.imageUrl}
            width={120}
            height={110}
            alt={checkoutInfo.itemName}
          />
        </ImageContainer>
        <p>
          Uhuul <strong>{checkoutInfo.customerName}</strong>, sua{' '}
          <strong>{checkoutInfo.itemName}</strong> já está a caminho da sua
          casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const item = response.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      checkoutInfo: {
        customerName: response.customer_details.name,
        itemName: item.name,
        imageUrl: item.images[0],
      },
    },
  };
};
