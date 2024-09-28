import { css } from '@emotion/react';
import { Breakpoints } from '~/shared/styles';

export const styles = {
  container: css`
    padding: 0 20px;
    max-width: 1440px;
    margin: auto;

    ${Breakpoints.SM} {
      padding-top: 0;
    }
  `,
};
