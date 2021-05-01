import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { graqhqlCliant } from '@/plugins/graphqlCliant';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <ApolloProvider client={graqhqlCliant}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
);

export default App;
