import { stitchesConfig } from '@/styles';

export const HeaderContainer = stitchesConfig.styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const OpenModalButton = stitchesConfig.styled('button', {
  background: '$gray800',
  border: 0,
  padding: '0.5rem',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  span: {
    width: 18,
    height: 18,
    background: '$green300',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
