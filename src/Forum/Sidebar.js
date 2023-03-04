import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const users = useSelector((state) => state.users);

  return (
    <Wrapper>
      <section>
        <h2>Forum users</h2>
        { users ? (
          <List>
            { users.map((user) => (
              <ListItem key={user.id}>
                { user.username }
                <Status
                  online={user.online}
                  title={user.online ? 'on line' : 'off line'}
                />
              </ListItem>
            )) }
          </List>
        ) : null }
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  flex: 1;
  width: 15rem;
  padding: 2rem;
`;

const List = styled.ul`
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #F8F8F8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;
const Status = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 7px;
    background: ${props => props.online ? '#0be881' : '#707070' };
  }
`;

export default Sidebar;
