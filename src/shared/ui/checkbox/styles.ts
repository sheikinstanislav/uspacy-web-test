import { css } from '@emotion/react';
import { Colors } from '~/shared/styles';

export const styles = {
  checkboxWrapper: css`
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
  `,

  checkboxText: css`
    max-width: 400px;
    font-weight: 500;
    font-size: 15px;
    line-height: 125%;

    color: ${Colors.LIGHT_1};

    a {
      color: ${Colors.ACCENT_2};
    }
  `,

  checkbox: css`
    display: inline-block;
    height: 24px;
    width: 24px;
    padding: 4px;
    background: #fff;
    margin-right: 20px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    cursor: pointer;
  `,

  checked: css`
    background-color: rgba(255, 255, 255, 0.05);
  `,
};
