import React, {useState} from 'react'
import MovieList from './Components/MovieList';
import Header from './Components/Header';
import MovieFilter from './Components/MovieFilter';
import AddMovie from './Components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css'

import data from './movies.json'

function App() {
  const [movieList, setMovieList]=useState(data);
  //title && (movie.Title === title) || rating && (movie.Rating === rating)
  
  const filterMovies = (title, rating) => {

    const moviesListFiltered = movieList.filter(
      function (movie){
        if (title === "") 
            if (rating!=="")
               return movie.Rating === rating;
            else
              return movie;

        else 
          if (rating==="")
               return movie.Title.toUpperCase().indexOf(title.toUpperCase())>-1;
          else 
              return movie.Title.toUpperCase().indexOf(title.toUpperCase())>-1 && movie.Rating===rating;
      }

   )
   setMovieList(moviesListFiltered);
  }

  const addMovie = (userInputTitle, userInputDesc, userInputRate, userInputUrl) => {
    let movieListCopy = movieList;
    movieListCopy = [...movieList, {
    "Title" : userInputTitle, 
    "Description" : userInputDesc, 
    "Rating" : userInputRate, 
    "Poster" : userInputUrl}];
    setMovieList(movieListCopy);
  }


  return (
    <div className="container-fluid">
      <Header />
      <div className="container forms">
      <MovieFilter filterMovies={filterMovies}/>
      <AddMovie addMovie = {addMovie}  />
      </div>
      <MovieList movieList = {movieList}  />
    </div>
  
  );
}

export default App;
