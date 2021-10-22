import {useState} from 'react';

const AddMovie=({addMovie}) => {

    const [userInputTitle, setUserInputTitle] = useState('');
    const [userInputDesc, setUserInputDesc] = useState('');
    const [userInputRating, setUserInputRating] = useState('');
    const [userInputUrl, setUserInputUrl] = useState('');

    const handleChangeTitle=(e)=>{
        setUserInputTitle(e.currentTarget.value);
    }
    const handleChangeDesc=(e)=>{
        setUserInputDesc(e.currentTarget.value);
    }
    const handleChangeRating=(e)=> {
        setUserInputRating(e.currentTarget.value);
    }
    const handleChangeUrl=(e)=>{
        setUserInputUrl(e.currentTarget.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        addMovie(userInputTitle, userInputDesc, userInputRating, userInputUrl);
        setUserInputTitle('');
        setUserInputDesc('');
        setUserInputRating('');
        setUserInputUrl('');
    }

    return (
        <div>
            <form>
            <div className="container">
                <div className="row">
                <div className="col-6 add-form">
                <label>Movie title</label>
                <input type="text" value={userInputTitle} onChange={handleChangeTitle}
                placeholder="Enter title..." />
                <label>Movie description</label>
                <input type="text" value={userInputDesc} onChange={handleChangeDesc}
                placeholder="Enter description..." />
                <label>Movie rating</label>
                <input type="text" value={userInputRating} onChange={handleChangeRating}
                placeholder="Enter rating..." />
                <label>Movie poster</label>
                <input type="text" value={userInputUrl} onChange={handleChangeUrl}
                placeholder="Enter Url..." />
                 <label></label>
                <input className="btn btn-primary" type="submit" value="Add" onClick={handleClick} />
</div></div></div>
            </form>
        </div>
    )
}
export default AddMovie;