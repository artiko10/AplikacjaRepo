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
        <Route path='/' exact component={Home}/>
        <Route path='/button'  component={Button}/>
        <Route path='/checkbox'  component={Checkbox}/>
        <Route path='/dropdown'  component={Dropdown}/>
        <Route path='/input'  component={Input}/>
        <Route path='/table'  component={Table}/>
        <Route path='/alert'  component={Alert}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
