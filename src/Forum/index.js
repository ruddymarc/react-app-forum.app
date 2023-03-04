import React, { useState } from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import Sidebar from './Sidebar';
import PostDetail from './PostDetail';

const Forum = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const onClose = () => { setSelectedPost(null); }
  const onSelectPost = (post) => { setSelectedPost(post); }

  return (
    <Wrapper>
      { selectedPost 
        ? <PostDetail post={selectedPost} onClose={onClose} /> 
        : <Posts onSelectPost={onSelectPost} /> }
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #F5F5F5;
  display: flex;
  flex-wrap: wrap;
`;

export default Forum;
