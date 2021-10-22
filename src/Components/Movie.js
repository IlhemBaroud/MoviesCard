import 'bootstrap/dist/css/bootstrap.min.css'

const Movie =({movie}) => {
    

    return (

	<div>
        <div className="poster">
            <img src={movie.Poster} alt= {movie.Title} />
        </div>
        <div>    
            <h5>{movie.Title}</h5>
            <h5>{movie.Description}</h5>
            <h5>{movie.Rating}</h5>
        </div>
                
    </div>


    
    
    )
}
export default Movie;