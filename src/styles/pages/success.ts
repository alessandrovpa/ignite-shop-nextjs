import { stitchesConfig } from '..';

export const SuccessContainer = stitchesConfig.styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  div: {
    display: 'flex',
  },

  p: {
    fontSize: '1.2rem',
    maxWidth: 560,
    textAlign: 'center',
  },

  a: {
    textDecoration: 'none',
    color: '$green300',
  },
});

export const ImageContainer = stitchesConfig.styled('figure', {
  background: 'linear-gradient(180deg, #1ea484 0%, #7465d4 100%)',
  width: 145,
  height: 145,
  borderRadius: '50%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginLeft: '-2rem',

  boxShadow: '0 0 20px  rgba(0, 0, 0, 0.25)',

  img: {
    objectFit: 'cover',
  },
});
