import CategoryItem from "../categoryItem/categoryItem";

import './categories.styles.scss';

const Categories = ({categories}) => {
    return (
        <div className="categories-container">
        {
            categories.map( category => 
            <CategoryItem key={category.id} category={category} />
            )
        }
        </div>
    );
}

export default Categories;