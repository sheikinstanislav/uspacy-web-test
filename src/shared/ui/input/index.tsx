import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { styles } from './styles';

export const CustomInput: FC<TextFieldProps> = (props) => {
  return <TextField css={styles.input} variant="outlined" {...props} />;
};
