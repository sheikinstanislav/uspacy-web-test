import { css } from '@emotion/react';
import { Breakpoints, Colors } from '~/shared/styles';

export const styles = {
  wrapper: css`
    background-color: ${Colors.PRIMARY};
    padding: 15px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;

    ${Breakpoints.MD} {
      font-size: 14px;
      padding: 12px 0;
    }
  `,
};
