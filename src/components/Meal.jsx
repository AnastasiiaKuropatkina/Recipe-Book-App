import {Link} from 'react-router-dom';

function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return(
        <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal}/>
        </div>
        <div className="card-content">
          <p className="card-title">{strMeal}</p>
        </div>
        <div className="card-action">
          <Link className="btn" to={`/meal/${idMeal}`}>Watch recipe</Link>
        </div>
      </div>
      )
    }

export {Meal}