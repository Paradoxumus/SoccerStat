import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Box, Tab} from '@mui/material';
import {TabList, TabContext, TabPanel} from '@mui/lab';
import { maxWidth } from '@mui/system';


function App() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <TabContext value={value}>
        <Box sx ={{borderBottom: 1, borderColor: 'divider',width: maxWidth , height: 80}}>
          <TabList onChange={handleChange}>
          <Box
          sx={{
            width: 80,
            height: 80,
            marginLeft: 1
          }}
          />
            <Tab label="Лиги" value="1"/>
            <Tab label="Команды" value="2"/>
          </TabList>
        </Box>
      </TabContext>
    </div>
  );
}

export default App;
