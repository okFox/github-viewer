import React from 'react';
import { useSelector } from 'react-redux';
import { selectRepos } from '../../selectors/repoSelectors';


export default function RepoList(){
  const state = useSelector(state => state);
  const repos = selectRepos(state);

  const userRepos = repos.map(repo => (
    <li key={repo.id}>
      <div>
        <h3>{repo.name}</h3>
        <a href={repo.url}>{repo.url}</a>
      </div>
    </li>
  ));

  return (
    <>
      {repos.length > 0 && 
      <section>
        <h2>Repos:</h2>
        <ul>
          {userRepos}
        </ul> 
      </section>   
      }
    </>
  );
}
