import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Invalid method' });
  }
  if (!req.body.priceId) {
    return res.status(400).json({ error: 'Price not found' });
  }

  const priceId = req.body.priceId;

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;

  const cancelUrl = `${process.env.NEXT_URL}`;

  const items = priceId.map((price) => {
    return { price, quantity: 1 };
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: items,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
