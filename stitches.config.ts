import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      hover: 'rgba(255, 255, 255, 0.1)',
    },
    fonts: {
      heading: 'system-ui, sans-serif',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});