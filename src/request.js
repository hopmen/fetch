export default {
  key: `d8a8f972`,
  getData: async (name) => {
    return fetch(`https://www.omdbapi.com/?apikey=d8a8f972&s=${name}`)
      .then(data => data.json())
      .then(json => json.Search);
  }

}
