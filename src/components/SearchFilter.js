// src/components/SearchFilter.js

import React, { useState, useContext } from 'react';
import { ApiContext } from './ApiContext';

const SearchFilter = () => {
  const { updateQueryParams } = useContext(ApiContext);
  const [search, setSearch] = useState('');
  const [quantityGt, setQuantityGt] = useState('');
  const [costPriceLt, setCostPriceLt] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};

    if (search) params['search'] = search;
    if (quantityGt) params['quantity_gt'] = quantityGt;
    if (costPriceLt) params['cost_price_lt'] = costPriceLt;

    updateQueryParams(params);
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <label>Search:</label>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <label>Quantity Greater Than:</label>
        <input type="number" value={quantityGt} onChange={(e) => setQuantityGt(e.target.value)} />
      </div>
      <div>
        <label>Cost Price Less Than:</label>
        <input type="number" value={costPriceLt} onChange={(e) => setCostPriceLt(e.target.value)} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilter;
