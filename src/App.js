import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/review' element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
