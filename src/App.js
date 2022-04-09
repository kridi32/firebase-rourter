 import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inbox from './components/Inbox/Inbox';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/Inbox' element={
          <ProtectedRoute>
            <Inbox/>
          </ProtectedRoute>
  
      }></Route> 
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/user' element={<User/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
