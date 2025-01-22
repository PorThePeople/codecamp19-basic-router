import React from 'react';
import usePorStore from '../store/porStore';

function EasyZustand() {
  // Step 1 -> porStore.jsx

  // Step 2: Use Store
  const firstName = usePorStore((state) => state.firstName);
  const address = usePorStore((state) => state.address);
  const profile = usePorStore((state) => state.profile);
  const products = usePorStore((state) => state.products);
  const num = usePorStore((state) => state.number);
  const actionIncrease = usePorStore((state) => state.actionIncrease);
  const actionDecrease = usePorStore((state) => state.actionDecrease);
  const actionMultiply = usePorStore((state) => state.actionMultiply);

  return (
    <div>
      <p className="text-8xl">{num}</p>
      <button onClick={() => actionMultiply(0.5)} className="bg-red-400 m-1">
        Divide by 2
      </button>
      <button onClick={actionDecrease} className="bg-red-400 m-1">
        Decrease
      </button>
      <button onClick={actionIncrease} className="bg-green-400 m-1">
        Increase
      </button>
      <button onClick={() => actionMultiply(2)} className="bg-green-400 m-1">
        Times 2
      </button>
    </div>
  );
}

export default EasyZustand;
