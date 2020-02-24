export const getUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        username: data.login,
        name: data.name,
        numFollowers: data.followers,
        numFollowing: data.following,
        reposUrl: data.repos_url
      };
    });
};

export const getRepo = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(repo => ({
        id: repo.id,
        name: repo.name,
        url: repo.url
      }));
    });
};
