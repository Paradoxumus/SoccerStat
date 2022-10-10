import { SportsSoccer } from "@mui/icons-material"
import { AppBar, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react';

function Navbar() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position="static"  sx={{ flexDirection: "row" }}>
      <SportsSoccer fontSize="large" sx={{ marginLeft: "2vw", marginTop: "auto", marginBottom: "auto" } }/>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ sx: { bgcolor: "white" } }}
        sx={{ marginLeft: "2vw" }}
      >
        <Tab label="Лиги" to="/SoccerStat" component={Link} />
        <Tab label="Команды" to="/teams" component={Link} />
      </Tabs>
    </AppBar>
  )
}

export default Navbar