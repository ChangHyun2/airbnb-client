import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthContextProvider } from '@context/global/AuthContext';
import { MQContextProvider } from '@context/global/MQContext';
import Routes from '@routes/index';

import { pallete } from 'S';

const queryClient = new QueryClient();

export default function App() {
  return (
    <AuthContextProvider>
      <MQContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes />
          </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MQContextProvider>
    </AuthContextProvider>
  );
}
