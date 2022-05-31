import './App.css';
import { HomePage } from './Containers/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerAccessPage } from './Containers/customerAccessPage';
import { AddFriendPage } from './Containers/addFriendPage';
import { Dashboard } from './Containers/dashboard';
import { BuildTeam } from './Containers/buildTeam';
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client";
import {SocketContext, socket} from  "./sockeInstance";
import { TestPage } from './Containers/testPage/test';



function App() {
  return (
    <div className="App">
      
      <SocketContext.Provider value={socket}>
      <Router>
      <Routes>
        <Route path ="/" element={< HomePage/>}/>
        <Route path ="/player/access/:action" element={< CustomerAccessPage/>}/>
        <Route path ="/intergame" element={< AddFriendPage/>}/>
        <Route path ="/dashboard" element={< Dashboard/>}/>
        <Route path ="/test" element={< TestPage/>}/>
        <Route path ="/dashboard/buildteam" element={< BuildTeam/>}/>
        </Routes>
      </Router>

      </SocketContext.Provider>
      
      
    </div>
  );
}

export default App;
