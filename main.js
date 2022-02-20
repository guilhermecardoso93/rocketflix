import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

function getMovies() {
  const id = Math.floor(Math.random() * 1000) + 1
  console.log(id)

  const movie_url = `${BASE_URL}${id}?api_key=${API_KEY}&${language}`

  fetch(movie_url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      movieData = data
      vote = data.vote_average
      const movieElement = document.querySelector('.movie')
      movieElement.innerHTML = ''
      showMovie(movieData)
    })
}

let movieData
let vote

function clickMovie() {
  const findMovies = document.querySelector('#button')
  findMovies.addEventListener('click', getMovies)
}

clickMovie()

function showMovie(movieData) {
  const movieElement = document.querySelector('.movie')
  const vote = document.querySelector('.voteAverage')
  const poster = movieData.poster_path

  movieElement.innerHTML = ''
  const contentMovie = `
          <div class="moviePoster"></div>
<div class='movieInfos'>
    <img src="${
      poster
        ? IMG_URL + poster
        : 'https://images.unsplash.com/photo-1599837565318-67429bde7162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80 '
    }" class='poster'>
    <div class="movieThigs">
    <h2 id="movieTitle">${
      movieData.title
        ? movieData.title
        : 'Ops, hoje não é dia de assistir filme.Bora codar! 🚀'
    }</h2>
    <h3>${movieData.original_title ? movieData.original_title : ''}</h3>
    <span  class='voteAverage'>
    ${movieData.vote_average ? movieData.vote_average : ''}
  </span>
    <span id="movieText">
        ${movieData.overview ? movieData.overview : ''}
  </span>
  </div>
</div>`

  movieElement.innerHTML = contentMovie
}

showMovie(movieData)
