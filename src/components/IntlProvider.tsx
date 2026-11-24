import { useSelector, shallowEqual } from 'react-redux';
import { IntlProvider } from 'react-intl';
import type { ReactNode } from 'react';
import type { IntlState } from '../types.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectorFunction = (state: any) => IntlState;

const defaultSelector = (state: { intl: IntlState }): IntlState => state.intl;

interface ConnectedIntlProviderProps {
  intlSelector?: SelectorFunction;
  children?: ReactNode;
}

const ConnectedIntlProvider = ({
  intlSelector = defaultSelector as SelectorFunction,
  children,
}: ConnectedIntlProviderProps) => {
  const intlState = useSelector(intlSelector, shallowEqual);
  return (
    <IntlProvider key={intlState.locale} {...intlState}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
