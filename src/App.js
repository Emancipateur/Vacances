
import { Route, Routes } from 'react-router';
import './App.css';
import Chine from './pages/Chine';
import Home from './pages/Home';
import Mexique from './pages/Mexique';


function App() {
  return (
    <div className="App">

      <Routes>  
        <Route path='/' element={<Home />}/> 
        <Route path='/mexique' element={<Mexique />}/> 
        <Route path='/chine' element={<Chine />}/> 

        
      </Routes>
  
    </div>
  );
}

export default App;
