import { stitchesConfig } from '..';

export const Container = stitchesConfig.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '$gray900',
  color: '$gray100',
});
