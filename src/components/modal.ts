import { stitchesConfig } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = stitchesConfig.styled(Dialog.Overlay, {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  inset: 0,
});

export const Content = stitchesConfig.styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  minWidth: '15rem',
  background: '$gray800',
  padding: '2rem',
  boxShadow: '-10px 0px 10px 0px #000',

  '> div': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export const CloseButton = stitchesConfig.styled(Dialog.Close, {
  background: 'transparent',
  border: 0,
  position: 'fixed',
  right: '1.5rem',
  top: '1.5rem',
  cursor: 'pointer',
  lineHeight: 0,
  color: '$gray100',
});

export const ProductItem = stitchesConfig.styled('div', {
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'stretch',
  gap: '0.5rem',

  figure: {
    background: 'linear-gradient(180deg, #1ea484 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  div: {
    padding: '0.25rem 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'baseline',

    button: {
      background: 'transparent',
      border: 0,
      color: '$green300',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  },
});

export const Footer = stitchesConfig.styled('footer', {
  marginBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  button: {
    background: '$green500',
    color: '$white',
    border: 0,
    padding: '1rem',
    borderRadius: 8,
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      background: '$green300',
    },
  },
});
