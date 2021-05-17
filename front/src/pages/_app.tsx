import type { AppProps } from 'next/app';
import '@/styles/reset.css';
import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { graqhqlCliant } from '@/plugins/graphqlCliant';
import Footer from '@/components/projects/footer';
import Header from '@/components/projects/header';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <ApolloProvider client={graqhqlCliant}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  </>
);

export default App;
