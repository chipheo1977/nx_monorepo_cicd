import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
