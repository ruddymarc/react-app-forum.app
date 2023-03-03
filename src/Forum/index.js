import React, { useState } from 'react'
import Posts from './Posts'
import Sidebar from './Sidebar'
import PostDetail from './PostDetail'
import './style.css'

const Forum = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const onClose = () => { setSelectedPost(null); }
  const onSelectPost = (post) => { setSelectedPost(post); }

  return (
    <div className="Forum">
      { selectedPost 
        ? <PostDetail post={selectedPost} onClose={onClose} /> 
        : <Posts onSelectPost={onSelectPost} /> }
      <Sidebar />
    </div>
  );
};

export default Forum
