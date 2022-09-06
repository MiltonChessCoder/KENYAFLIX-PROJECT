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

  showMovies = (movies, dom_element, path_type) => {
    
    // Create a variable that grabs id or class
    var moviesEl = document.querySelector(dom_element)
  
    // Loop through object
    for (var movie of movies.results) {
  
      // Within loop create an img element
      var imageElement = document.createElement('img')
  
      // Set attribute
      imageElement.setAttribute('data-id', movie.id)
  
      // Set source
      imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
  
      // Add event listener to handleMovieSelection() onClick
      imageElement.addEventListener('click', e => {
        handleMovieSelection(e)
      })
      // Append the imageElement to the dom_element selected
      moviesEl.appendChild(imageElement)
    }
  }
