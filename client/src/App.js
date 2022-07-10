import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Editscreen from './Editscreen';
import Homescreen from './Homescreen';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homescreen/>}/>
        <Route path = '/edit_delete/:id' element = {<Editscreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
