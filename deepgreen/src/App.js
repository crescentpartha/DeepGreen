import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/Shared/NotFound';
import Navbar from './components/Home/Navbar';
import Footer from './components/Footer/Footer';
import AllProducts from './components/AllProducts/AllProducts';
import Table from './components/AllProducts/Table';
import Chair from './components/AllProducts/Chair';
import Sofa from './components/AllProducts/Sofa';
import Decoration from './components/AllProducts/Decoration';
import Other from './components/AllProducts/Other';

function App() {
  return (
    <div className="App text-secondary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route path='table' element={<Table></Table>}></Route>
          <Route path='chair' element={<Chair></Chair>}></Route>
          <Route path='sofa' element={<Sofa></Sofa>}></Route>
          <Route path='decoration' element={<Decoration></Decoration>}></Route>
          <Route path='other' element={<Other></Other>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
