import { css } from '@emotion/react';
import { Breakpoints, Colors, Fonts } from '~/shared/styles';

export const styles = {
  input: css`
    width: 100%;

    .MuiInputBase-input {
      background-color: rgba(255, 255, 255, 0.04);
      border-radius: 4px;
      font-family: ${Fonts.Manrope};
      font-weight: 500;
      color: ${Colors.LIGHT_1};
      -webkit-text-fill-color: ${Colors.LIGHT_1};
      padding: 16.5px 20px;

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px transparent inset;
        box-shadow: 0 0 0 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
      }

      &:-webkit-autofill:focus {
        background-color: rgba(255, 255, 255, 0.04) !important;
      }

      ${Breakpoints.MD} {
        padding: 14px 16px;
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
      legend {
        display: none;
        span {
          padding: 0;
        }
      }
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${Colors.ACCENT_3};
      margin-top: 6px;
    }
    .Mui-error .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${Colors.ERROR};
      margin-top: 6px;
    }

    .MuiFormLabel-root {
      font-family: ${Fonts.Manrope};
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      color: rgba(255, 255, 255, 0.4);
      margin-top: 5px;
      margin-left: 6px;

      ${Breakpoints.MD} {
        font-size: 15px;
        margin-top: 2px;
      }
      span {
        color: rgba(255, 255, 255, 0.4);
      }

      &.Mui-focused,
      &.MuiFormLabel-filled {
        color: ${Colors.LIGHT_1};
        background-color: ${Colors.ACCENT_3};
        padding: 3px 6px;
        border-radius: 4px;
        font-family: ${Fonts.Manrope};
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;
        margin-left: -3px;

        span {
          color: ${Colors.LIGHT_1};
        }
      }

      &.Mui-error.MuiFormLabel-filled,
      &.Mui-error.Mui-focused {
        background-color: ${Colors.ERROR};
      }
    }

    .MuiFormHelperText-root {
      &.Mui-error {
        display: flex;
        justify-content: flex-end;
        margin: 6px 0px 0px;
        color: ${Colors.ERROR};
        font-family: ${Fonts.Manrope};
      }
    }
  `,
};
