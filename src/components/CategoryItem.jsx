import {Link} from 'react-router-dom';

function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription} = props;
    return (
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
        </div>
        <div className="card-content">
          <p className="card-title">{strCategory}</p>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-action">
          <Link className="btn" to={`/category/${strCategory}`}>Watch category</Link>
        </div>
      </div>
        );
}

export {CategoryItem};