import './App.css';
import { HomePage } from './Containers/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerAccessPage } from './Containers/customerAccessPage';
import { AddFriendPage } from './Containers/addFriendPage';
import { Dashboard } from './Containers/dashboard';
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client";
import {SocketContext, socket} from  "./sockeInstance";
import { TestPage } from './Containers/testPage/test';
import { BuildTeam } from './Containers/challenges/buildteam';
import { FrameIt } from './Containers/challenges/frameIt';
import { PlanIt } from './Containers/challenges/planit';
import { Immersion } from './Containers/challenges/immersion';
import { HowMeightWe } from './Containers/challenges/howMightWe';
import { Collage } from './Containers/challenges/collage';
import { Interview } from './Containers/challenges/interview';
import { PeersObservingPeers } from './Containers/challenges/peersObservingPeers';
import { Cardsort } from './Containers/challenges/cardSort';
import { AnalogousInspiration } from './Containers/challenges/analogousInspiration';
import { ProtoPersonas } from './Containers/challenges/protoPersonas';

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
        <Route path ="/dashboard/frameit" element={< FrameIt/>}/>
        <Route path ="/dashboard/planit" element={< PlanIt/>}/>
        <Route path ="/dashboard/immersion" element={< Immersion/>}/>
        <Route path ="/dashboard/howmeightwe" element={< HowMeightWe/>}/>
        <Route path ="/dashboard/collage" element={< Collage/>}/>
        <Route path ="/dashboard/interview" element={< Interview/>}/>
        <Route path ="/dashboard/peerobservingbeers" element={< PeersObservingPeers/>}/>
        <Route path ="/dashboard/cardsort" element={< Cardsort/>}/>
        <Route path ="/dashboard/collage" element={< Collage/>}/>
        <Route path ="/dashboard/analogousinspiration" element={< AnalogousInspiration/>}/>
        <Route path ="/dashboard/protopersonas" element={<ProtoPersonas/>}/>






        </Routes>
      </Router>

      </SocketContext.Provider>
      
      
    </div>
  );
}

export default App;
