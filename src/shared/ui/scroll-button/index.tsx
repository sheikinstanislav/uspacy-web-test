import { ButtonHTMLAttributes, FC } from 'react';
import { styles } from './styles';
import { SerializedStyles } from '@emotion/react';

export interface ScrollButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  extendStyle?: SerializedStyles;
  onClick?: () => void;
}

export const ScrollButton: FC<ScrollButtonProps> = ({
  extendStyle,
  ...ScrollButtonProps
}) => {
  return (
    <button
      css={[styles.scrollButton, extendStyle]}
      {...ScrollButtonProps}
      aria-label="Scroll to contact form"
    >
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="0.135742" width="2" height="15" fill="white" />
        <path
          d="M1.5 11.1357L7 16.1357L12.5 11.1357"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};
