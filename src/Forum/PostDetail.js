import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PostDetail = ({ post, onClose }) => {
  return (
    <Modal>
      <BtnClose
        title='Back to publication'
        onClick={onClose}
      >
        &times;
      </BtnClose>
      <ModalContent>
        <h2>{ post.title }</h2>
        { post.content }
      </ModalContent>
    </Modal>
  )
}

PostDetail.propTypes = {
  post: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
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

const ModalContent = styled.main`
  width: 100%;
  height: 100%;
  background: #F1F1F1;
  color: dimgray;
  padding: .5em;
  text-align: justify;
`;

const BtnClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  color: inherit;
  font-size: calc(10px + 2vmin);
`;

export default PostDetail
