import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

class TweetList extends Component {
  state = {};
  render() {
    return (
      <ListMain className="box--white box--list">
        <FriendUser>
          <Flex>
            <Box className="icon">icon</Box>
            <Box className="friend-user-info">
              <h3>Rohit Shrestha</h3>
              <span>2 days ago</span>
            </Box>
          </Flex>
        </FriendUser>
        <List>
          <p>
            A rising tide of authoritarianism sweeps over capitals in Turkey and
            the Philippines, in Hungary and Poland, in far right parties in
            Germany, France and Austria.
          </p>
          <Flex>
            <Box>Like</Box>
            <Box>Comment</Box>
            {/* <Box>Share</Box> */}
          </Flex>
          <TweetResponse>
            <Flex>
              <Box>15 people like this</Box>
              <Box>0 Comments</Box>
            </Flex>
          </TweetResponse>
          <CommentBox>
            <Flex>
              <Box className="icon">icon</Box>
              <Box>
                <textarea>Add your comment</textarea>
              </Box>
            </Flex>
          </CommentBox>
        </List>
      </ListMain>
    );
  }
}

const ListMain = styled.div`
  padding: 0;
`;

const FriendUser = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
  padding: 14px 30px;
  .friend-user-info {
    h3 {
    }
    span {
      color: #999;
      display: block;
      font-size: 12px;
      font-style: italic;
      line-height: 18px;
    }
  }
`;

const List = styled.div`
  p {
    border-bottom: 1px solid #ddd;
    font-size: 15px;
    line-height: 23px;
    padding: 0 30px 20px;
  }
  > div {
    border-bottom: 1px solid #ddd;
    padding: 8px 30px;
    &:first-of-type {
      > div {
        color: #888;
        font-weight: bold;
        margin-right: 20px;
        & + div {
          border-left: 1px solid #ddd;
          padding-left: 20px;
        }
      }
    }
  }
`;

const TweetResponse = styled.div`
  > div > div {
    color: #666;
    margin-right: 10px;
  }
`;

const CommentBox = styled.div`
  margin-top: 10px;
  > div > div:last-of-type {
    width: 100%;
  }
  textarea {
    color: #999;
    font-size: 14px;
    height: 30px;
    padding: 2px 10px;
    width: 100%;
  }
`;

export default TweetList;
