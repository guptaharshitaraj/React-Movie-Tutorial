import React from 'react'
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <div>
      <MovieCard movie={{ url: 'https://www.posterized.in/products/american-psycho-american-psycho-movie-poster', 
        title: 'Example Movie',
        release_date: '2000-10-13'
      }} />
    </div>
  )
}

export default App
