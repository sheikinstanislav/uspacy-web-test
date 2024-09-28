import { css } from '@emotion/react';

export const styles = {
  scrollButton: css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;

    width: 26px;
    height: 54px;

    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 100px;
    position: relative;

    svg {
      position: absolute;
      animation: moveIcon 2s infinite ease-in-out;
    }

    @keyframes moveIcon {
      0% {
        top: 20%;
      }
      50% {
        top: 50%;
      }
      100% {
        top: 20%;
      }
    }
  `,
};
