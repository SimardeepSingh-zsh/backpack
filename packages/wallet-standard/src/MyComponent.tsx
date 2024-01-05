import React, { useState } from 'react';

interface MyComponentProps {
  name: string;
  age: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, I am {name}!</h1>
      <p>Age: {age}</p>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
};

export default MyComponent;