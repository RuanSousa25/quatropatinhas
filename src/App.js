import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Miaumenu from './pages/miaumenu/miaumenu';
import Gatalogo from './pages/gatalogo/gatalogo';
import Home from './pages/Home/home';
import Sobre from './pages/sobre/sobre';


const basename = "/quatropatinhas";
function App() {
  return (
    <div className="App">
     <BrowserRouter basename={basename}>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/miaumenu' element={<Miaumenu/>}/>
            <Route path='/gatalogo' element={<Gatalogo/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
