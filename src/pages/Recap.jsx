import React from 'react';

function Recap() {
  const obj = {
    firstName: 'Por',
    lastName: 'Trisiripisal',
  };
  obj.address = 'Bangkok';

  const arr = ['Por', 'Trisiripisal'];
  arr[2] = 'Bangkok';

  const obj2 = { street: '1234', zipcode: '5678' };
  const mergeObj = { ...obj, ...obj2 };

  const arr2 = ['1234', '5678'];
  const mergeArr = [...arr, ...arr2];

  const products = [
    { id: 1, title: 'ASUS', price: 40000 },
    { id: 2, title: 'MSI', price: 59000 },
  ];
  const newProduct = { id: 3, title: 'Lenovo', price: 20000 };
  const mergeProducts = [...products, newProduct];

  console.log(mergeProducts);

  return <div>Recap</div>;
}

export default Recap;
