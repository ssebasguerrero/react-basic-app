import React from 'react';
import './filterable-product-table.style.css';
import SearchBar from '../search-bar/search-bar.comp';
import ProductTable from '../product-table/product-table.comp';

 const FilterableProductTable = () => {
    return (
        <div className="filterable-product-table-container">
            <SearchBar/>
            <ProductTable/>
        </div>
    );
}

export default FilterableProductTable;