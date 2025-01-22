import React from 'react';
import useProductStore from '../store/product-store';

function ProductCard(props) {
  const addToCart = useProductStore((state) => state.actionAddToCart);
  const removeFromCart = useProductStore((state) => state.actionRemoveFromCart);
  const cart = useProductStore((state) => state.cart);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="max-h-96" src={props.product.images[0]} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.product.title}</h2>
        <p>{props.product.description}</p>
        <div className="card-actions justify-end">
          <button
            className={cart.includes(props.product) ? 'btn' : 'hidden'}
            onClick={() => removeFromCart(props.product.id)}
          >
            Remove from Cart
          </button>
          <button
            onClick={() => addToCart(props.product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
