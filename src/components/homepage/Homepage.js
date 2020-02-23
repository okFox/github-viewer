    
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { fetchRepo } from '../../actions/repoActions';
import User from '../user/User';
import Repos from '../repos/Repos';

export default function Form(){
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getUser = event => {
    event.preventDefault();
    dispatch(fetchUser(query));
    dispatch(fetchRepo(query));
  };

  return (
    <>
      <h1> Find a GitHub User </h1>
      <form onSubmit={getUser}>
        <input type='text' placeholder='Github Username' onChange={({ target }) => setQuery(target.value)} />
        <button>Search</button>
      </form>
      <User />
      <Repos />
    </>
  );
}
