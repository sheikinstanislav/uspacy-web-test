import { Homepage } from '~/pages/homepage';
import { withHocs } from './hocs';

const App = () => {
  return <Homepage />;
};

const WrappedApp = withHocs(App) as React.FunctionComponent;
WrappedApp.displayName = 'App';

export default WrappedApp;
