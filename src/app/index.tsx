import { Homepage } from '~/pages/homepage';
import { withHocs } from './hocs';

const App = () => {
  return <Homepage />;
};

export default withHocs(App);
