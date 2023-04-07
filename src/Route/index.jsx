import { Route, Routes } from 'react-router';

import HomePage from '../components/HomePage';
import NoMatch from '../components/NoMatch';
import HelloWorld from '../components/01HelloWorld';

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/hello" element={<HelloWorld />} />
    </Routes>
  );
};

export default RootRoute;
