import { Route, Routes } from 'react-router';

import HomePage from '../components/HomePage';
import HelloWorld from '../components/01HelloWorld';
import Animation from '../components/02Animation';

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/animation" element={<Animation />} />
    </Routes>
  );
};

export default RootRoute;
