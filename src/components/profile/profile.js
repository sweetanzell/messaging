import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import profileImg from '../../img/sweetanzell.jpg';

class Profile extends Component {
  state = {};
  render() {
    return (
      <ProfileMain className="box--white">
        <Flex>
          <Box className="profile-img">
            <img
              src={profileImg}
              width="100"
              height="100"
              className="profile-img"
            />
          </Box>
          <Box>
            <h2>Sweta Shrestha</h2>
            <span className="username">@sweetanzell</span>
          </Box>
        </Flex>
        <Flex className="total-counts">
          <Box className="posts">
            <span>214</span>Posts
          </Box>
          <Box className="likes">
            <span>42</span>Likes
          </Box>
        </Flex>
      </ProfileMain>
    );
  }
}

const ProfileMain = styled.div`
  > div {
    align-items: center;
    float: left;
    &:last-child {
      float: right;
    }
  }
  h2 {
    margin: 0 0 5px;
  }
  .username {
    color: #888;
  }
  .profile-img {
    margin-right: 10px;
    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .total-counts {
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 34px;
    padding: 8px 0;
  }
  .posts,
  .likes {
    color: #666;
    padding: 2px 10px;
    span {
      font-weight: bold;
      margin-right: 4px;
    }
  }
  .likes {
    border-left: 1px solid #ccc;
  }
`;

export default Profile;
