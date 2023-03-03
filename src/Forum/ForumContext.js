import PropTypes from 'prop-types'
import React, {
  useState, useMemo, useContext, createContext,
} from 'react'

const ForumContext = createContext()

const ForumProvider = ({ children }) => {
  const [users] = useState([
    {
      id: Math.random().toString(),
      username: 'john_doe',
      names: { first: 'John', last: 'Doe' },
      online: true,
    },
    {
      id: Math.random().toString(),
      username: 'jane_doe',
      names: { first: 'Jane', last: 'Doe' },
      online: false,
    }
  ])
  const [posts, setPosts] = useState([
    {
      id: Math.random().toString(),
      title: 'Le fil à couper le beurre en phase de test finale',
      content: "Des scientifiques auraient mis au point un outil ayant l'apparence d'un fil et pouvant servir à couper du beurre. Une révolution pour le monde de la tartine.",
    },
  ])
  const params = useMemo(() => ({
    users,
    posts,
    addPost: (post) => setPosts([...posts, post]),
    removePost: (postId) => setPosts(posts.filter((post) => post.id !== postId))
  }), [posts, users])

  return (
    <ForumContext.Provider value={params}>
      { children }
    </ForumContext.Provider>
  )
}

const useForum = () => {
  const context = useContext(ForumContext);
  if (context === undefined) {
    throw new Error("ForumContext must be used within a ForumProvider");
  }
  return context;
}

ForumProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ForumProvider, useForum }
