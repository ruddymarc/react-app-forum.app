import React from 'react'
import { users } from '../data'

const Sidebar = () => {
  return (
    <aside>
      <div>
        <h2>Utilisateurs du forum</h2>
        { users ? (
          <ul>
            { users.map((user) => (
              <li key={user.id}>
                { user.username }
                <span 
                  className={['status', user.online ? 'online' : null].join(' ')}
                  title={user.online ? 'on line' : 'off line'}
                />
              </li>
            )) }
          </ul>
        ) : null }
      </div>
    </aside>
  )
}

export default Sidebar
