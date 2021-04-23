import React from 'react';
import './product-category-row.style.css';

 const ProductCategoryRow = (props) => {
    return (
        <div className="product-category-container">
            <div>
                {props.categoryName}
            </div>
        </div>
    );
}

export default ProductCategoryRow;