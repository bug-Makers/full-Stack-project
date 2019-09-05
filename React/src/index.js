import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'react-apollo';

import 'antd/dist/antd.css';

import Index from './routes/index';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3002',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers['x-token'] = localStorage.getItem('token');
    req.options.headers['x-refresh-token'] = localStorage.getItem('refreshToken');
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface: networkInterface
});

const App = () => (
  <ApolloProvider client={client}>
    <Index />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
