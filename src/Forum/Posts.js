import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { getPosts } from './api'
import NewPost from './NewPost'

const Posts = ({ onSelectPost }) => {
  const {
    isLoading, isError, data, error,
  } = useQuery('posts', getPosts)
  const status = isLoading
    ? <span>Loadin...</span>
    : isError
      ? <span>{ `Èrror : ${error.message}!` }</span>
      : null
    const posts = data

  return (
    <Modal>
      <ModalContent>
        <NewPost />
        <h2>Publications</h2>
        { posts ? (
          <ul>
            { posts.map((post) => (
              <li key={post.id}>
                {post.title}
                <BtnLink onClick={() => { onSelectPost(post) }}>
                  Read more
                </BtnLink>
              </li>
            )) }
          </ul>
        ) : status }
      </ModalContent>
    </Modal>
  )
}

Posts.propTypes = {
  onSelectPost: PropTypes.func.isRequired,
}

const Modal = styled.main`
  flex: 3;
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #5352ed;
  color: snow;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  background: #F1F1F1;
  color: dimgray;
  padding: .5em;
  text-align: justify;
`;

const BtnLink = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: calc(10px + 2vmin);
`;

export default Posts
