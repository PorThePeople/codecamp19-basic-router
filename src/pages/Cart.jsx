import React from 'react';
import useProductStore from '../store/product-store';
import ProductCard from './ProductCard';

function Cart() {
  const cart = useProductStore((state) => state.cart);
  const clearCart = useProductStore((state) => state.actionClearCart);
  return (
    <div>
      <button
        className={cart.length > 0 ? 'btn btn-primary' : 'hidden'}
        onClick={clearCart}
      >
        Clear Card
      </button>
      <div className="flex flex-wrap gap-1">
        {cart.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
