import { css } from '@emotion/react';
import { Breakpoints, Colors, Fonts } from '~/shared/styles';
import { ButtonVariant } from './index';

const buttonStyles = {
  default: css`
    background-color: ${Colors.LIGHT_1};

    &:hover,
    &:focus {
      background-color: ${Colors.ACCENT_2};
      color: ${Colors.LIGHT_1};
    }

    &:disabled {
      cursor: default;
      background-color: ${Colors.LIGHT_1};
      color: rgba(0, 0, 0, 0.4);
    }
  `,

  primary: css`
    color: ${Colors.LIGHT_1};
    border: 0;
    background-color: ${Colors.PRIMARY};

    &:hover,
    &:focus {
      color: ${Colors.LIGHT_1};
      background-color: ${Colors.ACCENT_2};
    }

    &:disabled {
      cursor: default;
      color: rgba(255, 255, 255, 0.4);
      background-color: ${Colors.PRIMARY};
    }
  `,
};

export const styles = {
  button: (variant: ButtonVariant) => css`
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 88.5%;
    color: ${Colors.NEUTRAL_BLACK};
    border-radius: 100px;
    padding: 22px 38px;
    font-family: ${Fonts.Manrope};
    border: 0;
    ${buttonStyles[variant]}

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;

    ${Breakpoints.MD} {
      padding: 16px 24px;
      font-size: 14px;
    }
  `,
};
