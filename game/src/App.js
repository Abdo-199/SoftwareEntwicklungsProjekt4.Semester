import './App.css';
import { HomePage } from './Containers/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerAccessPage } from './Containers/customerAccessPage';
import { AddFriendPage } from './Containers/addFriendPage';
import { Dashboard } from './Containers/dashboard';
import { BuildTeam } from './Containers/buildTeam';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path ="/" element={< HomePage/>}/>
        <Route path ="/player/access/:action" element={< CustomerAccessPage/>}/>
        <Route path ="/intergame" element={< AddFriendPage/>}/>
        <Route path ="/dashboard" element={< Dashboard/>}/>
        <Route path ="/dashboard/buildteam" element={< BuildTeam/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
