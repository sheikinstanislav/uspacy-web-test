import { css } from '@emotion/react';
import { Breakpoints, Colors, Fonts } from '~/shared/styles';

export const styles = {
  heading: css`
    font-family: ${Fonts.Montserrat};
    font-style: normal;
    font-weight: 900;
    font-size: 120px;
    line-height: 88%;
    text-align: center;
    letter-spacing: -0.07em;

    color: ${Colors.LIGHT_1};

    ${Breakpoints.LG} {
      font-size: 72px;
    }
    ${Breakpoints.MD} {
      font-size: 64px;
    }
    ${Breakpoints.SM} {
      font-size: 42px;
    }
  `,
};
