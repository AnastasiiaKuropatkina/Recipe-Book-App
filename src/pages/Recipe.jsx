import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Preloader} from '../components/Preloader'
import {getMealById} from '../api'

function Recipe() {
    const {id} = useParams();
    const [recipe,setRecipe] = useState({});
    const navigate = useNavigate();

    // Go back function
    const goBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0])
        })
    }, [id]);

    return (
        <div className="row">
        <div className="col s12 m7">
            {!recipe.idMeal ? <Preloader/> : (
                <div className="recipe card">
                    <div className="card-image">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    </div>
                    <div className="card-content">
                        <h1 className="card-title">{recipe.strMeal}</h1>
                        <h6>Category: {recipe.strCategory}</h6>
                        {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                        <p>{recipe.strInstructions}</p>
                    </div>
                    <div className="card-action">
                    <table className="centered">
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(recipe).map(key => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                )
                            }
                            return null;
                        })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div>
                            <h5>Video Recipe</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                allowFullScreen
                            />
                        </div>
                    ): null}
                    </div>
                </div>
            )}
            <button className="btn" onClick={goBack}>Go Back</button>
        </div></div>
    );
}
export {Recipe}