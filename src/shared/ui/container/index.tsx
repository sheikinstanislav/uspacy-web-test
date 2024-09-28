import { FC } from 'react';
import { styles } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};
