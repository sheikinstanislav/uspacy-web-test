import { Global } from '@emotion/react';
import { Fragment } from 'react';
import { globalStyles } from '../styles';

export const withGlobalStyles = (component: () => JSX.Element) => () =>
  (
    <Fragment>
      <Global styles={globalStyles} />
      {component()}
    </Fragment>
  );
