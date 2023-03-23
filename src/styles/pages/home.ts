import { stitchesConfig } from '..';

export const HomeContainer = stitchesConfig.styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
});

export const Product = stitchesConfig.styled('a', {
  background: 'linear-gradient(180deg, #1ea484 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  overflow: 'hidden',

  footer: {
    position: 'absolute',
    background: 'rgba(0,0,0,0.6)',

    bottom: 0,
    left: 0,
    right: 0,

    padding: '1rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: '0.2s',

    span: {
      color: '$green300',
      fontWeight: 'bold',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
});
