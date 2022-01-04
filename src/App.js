
import { Route, Routes } from 'react-router';
import './App.css';
import Chine from './pages/Chine';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Mexique from './pages/Mexique';
import Login from './pages/Login';
import Book from './pages/Book';



function App() {
  return (
    <div className="App">

      <Routes>  
        <Route path='/' element={<Home />}/> 
        <Route path='/mexique' element={<Mexique />}/> 
        <Route path='/chine' element={<Chine />}/> 
        <Route path='/contact' element={<Contact />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/book' element={<Book />}/> 

        
      </Routes>
  
    </div>
  );
}

export default App;
