import logo from './logo.svg';
import './App.css';
import First from './compo/first';
import Scnd from './compo/scnd';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Third from './compo/third';
import Stateprac from './compo/stateprac';

function App() {
  return (
    <div className="App">

<Stateprac/>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/add' element={<Scnd/>}/>

      </Routes>
      </BrowserRouter>
      
      


    </div>
  );
}

export default App;
