import './App.css';
import React from 'react';
import {getLeagues} from './API.js'
import { Box } from '@mui/material';
import Navbar from "./components/Navbar"
import Routing from './components/Routing';

import { useEffect, useState } from "react"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box>
        <Routing />
      </Box>
    </div>
  );
}

export default App;
