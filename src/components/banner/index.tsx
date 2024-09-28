import { Container } from '~/shared/ui';
import { styles } from './styles';

export const Banner = () => {
  return (
    <div css={styles.wrapper}>
      <Container>
        <p>Безкоштовна онлайн-конференція - 30 квітня о 10:00</p>
      </Container>
    </div>
  );
};
