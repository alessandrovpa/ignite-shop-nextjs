import { stitchesConfig } from '..';

export const ProductContainer = stitchesConfig.styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
  maxWidth: 1180,
});

export const ProductImage = stitchesConfig.styled('figure', {
  background: 'linear-gradient(180deg, #1ea484 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  padding: '2.5rem',

  img: {
    objectFit: 'cover',
  },
});

export const ProductInfo = stitchesConfig.styled('div', {
  padding: '0 2.5rem',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginTop: '1rem',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    border: 0,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    width: '100%',
    color: '$white',
    padding: '1rem',
    background: '$green500',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      background: '$green300',
      transition: '0.2s',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
});
