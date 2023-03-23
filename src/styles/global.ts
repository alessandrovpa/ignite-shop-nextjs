import { stitchesConfig } from '.';

export const globalStyles = stitchesConfig.globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    maxHeight: '100vh',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
});
