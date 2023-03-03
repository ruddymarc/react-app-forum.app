import React from 'react'
import PropTypes from 'prop-types'

const PostDetail = ({ post, onClose }) => {
  return (
    <main>
      <button
        type='button'
        className='Btn_close'
        title='Back to publication'
        onClick={onClose}
      >
        &times;
      </button>
      <div className='_content'>
        <h2>{ post.title }</h2>
        { post.content }
      </div>
    </main>
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

export default PostDetail
