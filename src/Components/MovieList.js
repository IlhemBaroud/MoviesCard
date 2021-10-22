import Movie from "./Movie";
import 'bootstrap/dist/css/bootstrap.min.css'

const MovieList=({movieList, handleRating})=>{

return(
<div className="container-fluid movies-container">
    {movieList.map(movie=> 
        <Movie movie={movie} handleRating = {handleRating} />

    )}
</div>


)
}
export default MovieList;