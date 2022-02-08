import '../componentStyles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './Landing'
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
