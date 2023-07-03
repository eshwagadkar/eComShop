import './categoryItem.styles.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    
    return (
        <>
            {/* Categories */}
            <div className="category-container">
            <img className='background-image'
                 style={{
                    backgroundImage: `url(${imageUrl})`
                 }} 
                 alt={title} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
            </div>
        </>
    )
}

export default CategoryItem;