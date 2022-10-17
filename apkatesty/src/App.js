import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Button from './pages/Button/Button';
import Checkbox from './pages/Checkbox/Checkbox';
import Dropdown from './pages/Dropdown/Dropdown';
import Input from './pages/Input/Input';
import Table from './pages/Table/Table';
import Alert from './pages/Alert/Alert';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/button' element={<Button/>}/>
        <Route path='/checkbox' element={<Checkbox/>}/>
        <Route path='/dropdown' element={<Dropdown/>}/>
        <Route path='/input' element={<Input/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/alert' element={<Alert/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
