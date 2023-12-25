
import './App.css';
import { Router,Routes , Route } from 'react-router-dom';
import Home from './pages/home/home';
import Design from './pages/designs/design';

function App() {
  return (
    <div className="App">
     
          <Routes  forceRefresh={true}>
              <Route path="/" element={<Home /> } />
              <Route path="/design" element={<Design />} />
          </Routes>
   

    </div>
  );
}

export default App;
