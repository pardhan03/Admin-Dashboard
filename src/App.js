
import './App.css'
import {Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
