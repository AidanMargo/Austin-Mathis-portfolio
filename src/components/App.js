import '../componentStyles/App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './Landing'
import Nav from './Nav';
import Menu from './Menu';
import About from './About'

function App() {

  const [menuActive, setMenuActive] = useState(false)


  return (
    <div className="App">
      {menuActive && <Menu />}
      <Nav menuActive={menuActive} setMenuActive={setMenuActive}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/work' element={<Landing />}/>
          <Route path='/contact' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
