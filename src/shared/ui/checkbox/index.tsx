import React, { FC } from 'react';
import { styles } from './styles';

interface CustomCheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label: JSX.Element;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <label css={styles.checkboxWrapper}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />

      <svg
        css={[styles.checkbox, checked && styles.checked]}
        aria-hidden="true"
        viewBox="0 0 17 14"
        fill="none"
      >
        <path
          d="M1 6L7 11L15 1"
          strokeWidth="3"
          stroke={checked ? '#fff' : 'none'}
        />
      </svg>
      <span css={styles.checkboxText}>{label}</span>
    </label>
  );
};
