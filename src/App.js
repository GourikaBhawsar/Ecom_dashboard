
import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent'
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './component/AddProduct';
import ProduuctList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProduuctList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout Component</h1>} />
            <Route path='/profile' element={<h1>Profile Component</h1>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
