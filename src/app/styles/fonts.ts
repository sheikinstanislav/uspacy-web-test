import { css } from '@emotion/react';
import { FONTS_PATHS } from '~/constants';

export const fonts = css`
  @font-face {
    font-family: 'Montserrat';
    src: url('/${FONTS_PATHS.MONTSERRAT}/Montserrat-Black.woff2')
        format('woff2'),
      url('/${FONTS_PATHS.MONTSERRAT}/Montserrat-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/${FONTS_PATHS.MONTSERRAT}/Montserrat-ExtraBold.woff2')
        format('woff2'),
      url('/${FONTS_PATHS.MONTSERRAT}/Montserrat-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Manrope';
    src: url('/${FONTS_PATHS.MANROPE}/Manrope-Regular.woff2') format('woff2'),
      url('/${FONTS_PATHS.MANROPE}/Manrope-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Manrope';
    src: url('/${FONTS_PATHS.MANROPE}/Manrope-Medium.woff2') format('woff2'),
      url('/${FONTS_PATHS.MANROPE}/Manrope-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Manrope';
    src: url('/${FONTS_PATHS.MANROPE}/Manrope-SemiBold.woff2') format('woff2'),
      url('/${FONTS_PATHS.MANROPE}/Manrope-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;
