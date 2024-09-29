import { css } from '@emotion/react';
import { Breakpoints, Colors, Fonts } from '~/shared/styles';

export const styles = {
  header: css``,

  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  wrapper: css`
    padding-top: 70px;
  `,

  logo: css``,

  formWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  contact: {
    wrapper: css`
      padding-top: 235px;
      padding-bottom: 100px;

      ${Breakpoints.XL} {
        padding-top: 135px;
      }
      ${Breakpoints.LG} {
        padding-top: 75px;
      }
    `,
  },

  hero: {
    wrapper: css`
      padding-top: 100px;
      position: relative;

      ${Breakpoints.MD} {
        padding-top: 60px;
      }
    `,

    info: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 88.5%;
      width: 340px;

      color: ${Colors.LIGHT_1};
      position: relative;
      margin-bottom: 35px;

      ${Breakpoints.MD} {
        width: 100%;
        max-width: 340px;
        font-size: 15px;
        margin-bottom: 30px;
      }
    `,

    content: {
      wrapper: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `,

      title: css`
        font-family: ${Fonts.Montserrat};
        font-weight: 800;
        font-size: 34px;
        line-height: 100%;
        letter-spacing: -0.05em;

        color: ${Colors.LIGHT_1};

        ${Breakpoints.XL} {
          font-size: 28px;
        }

        ${Breakpoints.SM} {
          font-size: 24px;
        }
      `,

      desc: css`
        font-family: ${Fonts.Manrope};
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        margin-bottom: 45px;

        color: ${Colors.LIGHT_1};

        ${Breakpoints.XL} {
          font-size: 20px;
        }

        ${Breakpoints.SM} {
          font-size: 16px;
          line-height: 140%;
          margin-bottom: 32px;
        }
      `,

      button: css`
        margin-top: 55px;

        ${Breakpoints.MD} {
          margin-top: 24px;
        }
      `,
    },
  },

  row: css`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    gap: 54px;
    max-width: 1130px;
    margin-left: 50px;

    ${Breakpoints.MD} {
      margin-top: 32px;
    }

    ${Breakpoints.LG} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-left: 0;
      gap: 30px;

      ${Breakpoints.MD} {
        gap: 24px;
      }
    }
  `,

  col: {
    left: css`
      width: 34%;

      ${Breakpoints.LG} {
        width: 100%;
      }
    `,

    right: css`
      width: 62%;
      ${Breakpoints.LG} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  },

  divider: css`
    width: 2px;
    height: 48px;
    transform: rotate(30deg);
    background-color: ${Colors.LIGHT_1};
  `,

  bgElement: css`
    svg {
      position: absolute;
      margin-top: -220px;
      width: 100%;
      pointer-events: none;
    }
  `,
};
