import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Header, Profile, Tweet, TweetList } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Profile />
          <Tweet />
          <TweetList />
        </div>
      </div>
    );
  }
}

export default App;
