import React, { useEffect } from 'react';
import useProductStore from '../store/product-store';
import ProductCard from './ProductCard';

function Product() {
  const products = useProductStore((state) => state.products);
  const actionGetData = useProductStore((state) => state.actionGetData);

  useEffect(() => {
    actionGetData();
  }, []);

  return (
    <div className="flex gap-2 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Product;
