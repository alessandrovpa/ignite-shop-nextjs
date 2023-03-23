import { stitchesConfig } from '..';

export const Container = stitchesConfig.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
});

export const Header = stitchesConfig.styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
});
