import type { ReactNode } from 'react';
import type { Store } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import IntlProvider from './IntlProvider.tsx';

interface ProviderProps {
  store: Store;
  children: ReactNode;
}

const Provider = ({ store, children }: ProviderProps) => (
  <ReduxProvider store={store}>
    <IntlProvider>{children}</IntlProvider>
  </ReduxProvider>
);

export default Provider;
