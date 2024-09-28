import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { styles } from './styles';

export type ButtonVariant = 'default' | 'primary';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  extendStyle?: SerializedStyles;
}

export const Button: FC<Props> = ({
  children,
  variant = 'default',
  extendStyle,
  ...buttonProps
}) => (
  <button css={[styles.button(variant), extendStyle]} {...buttonProps}>
    {children}
  </button>
);
