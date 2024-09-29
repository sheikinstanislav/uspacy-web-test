import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { Colors, Fonts } from '~/shared/styles';

import { reset } from './reset';
import { bgImage } from '~/shared/assets/img';

export const globalStyles = css`
  ${emotionNormalize}
  ${reset}
  body {
    width: 100%;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: ${Fonts.Manrope};

    background-color: ${Colors.NEUTRAL_BLACK};
    color: ${Colors.LIGHT_1};

    background-image: url(${bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::after {
      position: fixed;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      content: '';

      transition: opacity 500ms ease;
      pointer-events: none;

      opacity: 0;
      z-index: 100;

      background: rgb(0 0 0 / 30%);

      backdrop-filter: blur(5px);
    }

    &.lock {
      overflow: hidden;

      padding-right: var(--scrollbar-compensation);
      touch-action: none;

      &::after {
        opacity: 1;
      }
    }
  }

  .visually-hidden {
    position: absolute;

    overflow: hidden;
    clip: rect(0 0 0 0);

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;

    white-space: nowrap;

    border: 0;
    clip-path: inset(100%);
  }

  /* globalStyles.css */
  .MuiOutlinedInput-root {
    & fieldset {
      border-color: transparent !important;
    }

    &:hover fieldset {
      border-color: ${Colors.ACCENT_3} !important;
    }

    &.Mui-focused fieldset {
      border-color: ${Colors.ACCENT_3} !important;
    }
    &.Mui-error fieldset {
      border-color: ${Colors.ERROR} !important;
    }
  }
`;
