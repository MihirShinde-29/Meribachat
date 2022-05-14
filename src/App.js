import './App.css';
import { Login } from './pages/login'
import { Page1 } from './pages/page1'
import { Page2 } from './pages/page2'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/1' element={<Page1 />} />
      <Route path='/2' element={<Page2 />} />
    </Routes>
  );
}

export default App;
