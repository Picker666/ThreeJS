import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Vite + React</h1>
      <h2>
        <Link to={'/hello'}>Hello</Link>
      </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default HomePage;
