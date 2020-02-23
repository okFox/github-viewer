import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors/userSelectors';

export default function User(){
  const state = useSelector(state => state);
  const user = selectUser(state);

  if(!user) {
    return (
      <h1>User not found</h1>
    );
  }

  return (
    <section>
      <h2><a href={user.url}>{user.username}</a></h2>
      <h3>{user.name}</h3>
      <p> Followers: {user.numFollowers} | Following: {user.numFollowing}</p>
    </section>

  );
}
