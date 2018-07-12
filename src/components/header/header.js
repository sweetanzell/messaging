import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderMain className="box--white">
        <h1>Messaging</h1>
      </HeaderMain>
    );
  }
}

const HeaderMain = styled.header`
  margin-bottom: 40px;
  padding: 20px 0;
  text-align: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default Header;
