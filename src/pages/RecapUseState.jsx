import React, { useState } from 'react';

function RecapUseState() {
  const num = 5;
  const [number, setNumber] = useState(4);
  const [number2, setNumber2] = useState({ num: 5 });

  const hdlIncrease = () => {
    setNumber((prv) => prv + 1);
  };
  const hdlDecrease = () => {
    setNumber((prv) => prv - 1);
  };

  const hdlIncrease2 = () => {
    setNumber2((prv) => ({ num: prv.num + 1 }));
  };

  const hdlDecrease2 = () => {
    setNumber2((prv) => ({ num: prv.num - 1 }));
  };

  const hdlMultiply2 = () => {
    setNumber2((prv) => ({ num: prv.num * 2 }));
  };

  const hdlDivide2 = () => {
    setNumber2((prv) => ({ num: prv.num / 2 }));
  };

  return (
    <div>
      <p className="text-8xl">{number}</p>
      <button
        className="bg-red-300 p-2 rounded-md shadow-md hover:bg-red-500"
        onClick={hdlDecrease}
      >
        Decrease
      </button>
      <button
        className="bg-green-300 p-2 rounded-md shadow-md hover:bg-green-500"
        onClick={hdlIncrease}
      >
        Increase
      </button>
      <hr />
      <p className="text-8xl">{number2.num}</p>
      <button
        className="bg-red-300 p-2 rounded-md shadow-md hover:bg-red-500"
        onClick={hdlDivide2}
      >
        /2
      </button>
      <button
        className="bg-red-300 p-2 rounded-md shadow-md hover:bg-red-500"
        onClick={hdlDecrease2}
      >
        Decrease
      </button>
      <button
        className="bg-green-300 p-2 rounded-md shadow-md hover:bg-green-500"
        onClick={hdlIncrease2}
      >
        Increase
      </button>
      <button
        className="bg-green-300 p-2 rounded-md shadow-md hover:bg-green-500"
        onClick={hdlMultiply2}
      >
        x2
      </button>
    </div>
  );
}

export default RecapUseState;
