import React from 'react'

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

export default PostDetail
