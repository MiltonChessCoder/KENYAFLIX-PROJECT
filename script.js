window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }

  function fetchMovies(url, dom_element, path_type) {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }
      })
      .then(data => {
        showMovies(data, dom_element, path_type)
      })
      .catch(error_data => {
        console.log(error_data)
      })
  }
