import {useState} from "react"
const MovieFilter = ({filterMovies}) => {

    const [userInputTitle, setUserInputTitle] = useState('');
    const [userInputRating, setUserInputRating] = useState('');
    const handleChangeTitle = (e) => {
        setUserInputTitle(e.currentTarget.value);
    } 
    const handleChangeRating = (e) => {
        setUserInputRating(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        filterMovies(userInputTitle, userInputRating);
        setUserInputTitle('');
        setUserInputRating('');
    }
    return (


            <form>
                <div className="container">
                <div className="row">
                <div className="col-6 add-form">
                    <label>Movie title</label>
                    <input type = "text" value = {userInputTitle} placeholder = "Enter a movie title ..." 
                    onChange = {handleChangeTitle} />

                    <label>Movie rating</label>
                    <input type = "text" value = {userInputRating} placeholder = "Enter a movie rating ..." 
                    onChange = {handleChangeRating} /> 
                    <label></label>

                   <input className="btn btn-primary" type="submit" value="Search" onClick={handleSubmit} />
                </div>
                </div>
                </div>
        </form>

    )
}

export default MovieFilter;