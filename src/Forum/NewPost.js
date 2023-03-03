import React, { useState } from 'react'
import styled from 'styled-components'
import { useForum } from './ForumContext'

const NewPost = () => {
  const { addPost } = useForum()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleContentInput = (e) => setContent(e.target.value);
  const handleSubmit = () => {
    if (title && content) {
      addPost({
        id: Math.random().toString(),
        title,
        content,
      })
      setTitle('')
      setContent('')
    }
  }
  
  return (
    <Wrapper>
      <h2>Nouvelle publication</h2>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type="text"
          value={title}
          onChange={handleTitleInput}
        />
      </div>
      <div>
        <label htmlFor='content'>Content</label>
        <textarea
          id='content'
          value={content}
          onChange={handleContentInput}
        />
      </div>
      <Button type='button' onClick={handleSubmit}>
        Post
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  background: #fff;
  border-radius: 4px;
  padding: 2rem;
  border: thin inset #EFF5F2;

  input,
  textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0.5rem 0;
    padding: 1rem;
    font-family: inherit;
  }

  input {
    height: 2.5rem;
  }

  textarea {
    height: 10rem;
  }
`;

const Button = styled.button`
  background: #5352ed;
  border: none;
  padding: 1rem 4rem;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: calc(10px + 2vmin);
`;

export default NewPost
