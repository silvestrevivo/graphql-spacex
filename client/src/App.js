import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="logo" style={{ width: 300, display: 'block', margin: 'auto' }} />
            <Route path="/" component={Launches} exact />
            <Route path="/launch/:flight_number" component={Launch} exact />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
