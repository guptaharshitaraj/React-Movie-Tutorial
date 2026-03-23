import React from 'react'
import MovieCard from '../components/MovieCard' 
const Home = () => {
    const movies=[{
      id:1,title:"The Shawshank Redemption",year:1994,genre:"Drama",rating:9.3
    },{
      id:2,title:"The Godfather",year:1972,genre:"Crime",rating:9.2
    },{
      id:3,title:"The Dark Knight",year:2008,genre:"Action",rating:9.0
    }];
  return (
    <div className='Home'>
      <div className='movies-grid'>
        {movies.map(movie=>{
          <MovieCard movie={movie} key={movie.id}/>

        })}
      </div>
    </div>
  )
}

export default Home
