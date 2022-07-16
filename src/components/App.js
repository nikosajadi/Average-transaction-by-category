import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Categories';
import Detail from './Detail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/category' element={<Categories />} />
          <Route path='/category/:id' element={<Detail />} />
          <Route path='/' element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
