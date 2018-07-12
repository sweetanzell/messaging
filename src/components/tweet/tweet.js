import React, { Component } from 'react';
import styled from 'styled-components';

class Tweet extends Component {
  state = {};
  render() {
    return (
      <TweetMain className="box--white">
        <textarea>Let's Tweet...</textarea>
        <button>Post</button>
      </TweetMain>
    );
  }
}

const TweetMain = styled.div``;

export default Tweet;
