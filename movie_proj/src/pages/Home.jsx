import React, { useState ,useEffect} from 'react'
import MovieCard from '../components/MovieCard' 
import {getPopularmovies,searchURLmovies} from '../services/api'
import '../css/Home.css'
const Home = () => {

const [searchQuery,setsearchQuery]=useState("");
    // const movies=[{
    //   id:1,title:"Shawshank Redemption",release_date:1994
    // },{
    //   id:2,title:"Godfather",release_date:1972
    // },{
    //   id:3,title:"Dark Knight",release_date:2008
    // }];

    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const[loading,setLoading]=useState(false);  
useEffect(()=>{
  const loadPopularMovies= async()=>{
    try{
      const popularMovies= await getPopularmovies();
      setMovies(popularMovies);
    }
    catch{
      setError("Failed to fetch popular movies. Please try again later.");
    }
    finally{
      setLoading(false);
    }
  }; 
loadPopularMovies();
},[]);

    const handleSearch=async (e)=>{
      e.preventDefault()
    // alert(searchQuery);
    if(!searchQuery.trim()) return;
    if(loading) return;
       setLoading(true);
    try{
      const searchResults=await searchURLmovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    }
    catch(err){
      console.log(err);
      setError("Failed to search movies. Please try again later.");
    }
    finally{
      setLoading(false);
    }
 
     setsearchQuery("");
    }
  return (
    <div className='Home'>
     <form onSubmit={handleSearch} className='search-form'>
     <input type="text" placeholder="Search movies..." value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
     <button type="submit">Search</button>
     </form>
     {error && <div className='error'>{error}</div>}
     {loading ?(<div className='loading'>Loading...</div>):(  <div className='movies-grid'>
        {movies.map((movie)=>{
        //return movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (<MovieCard movie={movie} key={movie.id}/> 

        //);

return <MovieCard movie={movie} key={movie.id}/>
        })}
      </div>)}
    
    </div>
  )
}

export default Home
