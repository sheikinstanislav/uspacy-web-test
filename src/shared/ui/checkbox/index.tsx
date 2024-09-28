import React, { FC } from 'react';
import { styles } from './styles';

interface CustomCheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label: JSX.Element;
  name: string; // Add name to link with Formik
  checked: boolean; // Use Formik's checked value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Use Formik's onChange handler
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
        name={name} // Bind the name from Formik
        checked={checked} // Bind the checked state from Formik
        onChange={onChange} // Use Formik's onChange handler
      />

      <svg
        css={[styles.checkbox, checked && styles.checked]} // Update based on Formik's checked state
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
