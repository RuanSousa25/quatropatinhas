import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Miaumenu from './pages/miaumenu/miaumenu';
import Gatalogo from './pages/gatalogo/gatalogo';
import Home from './pages/Home/home';
import Sobre from './pages/sobre/sobre';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/quatropatinhas/' element={<Home/>}/>
            <Route path='/quatropatinhas/miaumenu' element={<Miaumenu/>}/>
            <Route path='/quatropatinhas/gatalogo' element={<Gatalogo/>}/>
            <Route path='/quatropatinhas/sobre' element={<Sobre/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
