import React from 'react'
import PropTypes from 'prop-types'
import { posts } from '../data'

const Posts = ({ onSelectPost }) => {
  return (
    <main>
      <div className='_content'>
        <h2>Publications</h2>
        { posts ? (
          <ul>
            { posts.map((post) => (
              <li key={post.id}>
                {post.title}
                <button
                  type='button'
                  className='Link'
                  onClick={() => { onSelectPost(post) }}
                >
                  Read more
                </button>
              </li>
            )) }
          </ul>
        ) : null }
      </div>
    </main>
  )
}

Posts.propTypes = {
  onSelectPost: PropTypes.func.isRequired,
}

export default Posts
