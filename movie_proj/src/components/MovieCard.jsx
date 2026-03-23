import React from 'react'

const MovieCard = ({movie}) => {
    function onFavouriteClick() {
        console.log('Favourite button clicked for movie:', movie.title);
    }
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.url} alt={movie.title} />
            <div className='movie-overlay'>
            <button className='favourite-btn' onClick={onFavouriteClick}>
            </button>
        </div>
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
