import React from 'react';
import './product-row.style.css';

 const ProductRow = (props) => {
    return (
        <div className="product-row-container">
            <div>
                {props.product.stock === 0 
                   ? <span className="product-stock">{props.product.name}</span>
                   : <span>{props.product.name}</span>
                }
                 
                {props.product.price}
            </div>
        </div>
    );
}

export default ProductRow;