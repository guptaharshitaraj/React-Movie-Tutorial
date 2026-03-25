import React from 'react'
import MovieCard from '../components/MovieCard' 
const Home = () => {
    const movies=[{
      id:1,title:"The Shawshank Redemption",release_date:1994
    },{
      id:2,title:"The Godfather",release_date:1972
    },{
      id:3,title:"The Dark Knight",release_date:2008
    }];
  return (
    <div className='Home'>
     
      <div className='movies-grid'>
        {movies.map(movie=>{
           return <MovieCard movie={movie} key={movie.id}/>;

        })}
      </div>
    </div>
  )
}

export default Home
