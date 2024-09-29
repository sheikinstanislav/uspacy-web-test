import { css } from '@emotion/react';
import { Breakpoints, Colors, Fonts } from '~/shared/styles';

export const styles = {
  form: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 455px;
    min-width: 455px;

    ${Breakpoints.MD} {
      min-width: 100%;
    }
  `,

  heading: css`
    font-family: ${Fonts.Montserrat};
    font-weight: 800;
    font-size: 34px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: ${Colors.LIGHT_1};
    max-width: 455px;
    margin-bottom: 20px;

    ${Breakpoints.MD} {
      font-size: 24px;
    }
  `,

  submitButton: css`
    margin-top: 20px;
  `,
};
