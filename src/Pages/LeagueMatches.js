import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import LeagueMatchesSelected from "../components/LeagueMatchesSelected";
import DataGridMatches from "../components/DataGridMatches";
import DatePickerMatches from "../components/DatePicker";
import { Breadcrumbs, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function LeagueMatches({league}) {
    const[dateFrom, setDateFrom] = useState(null)
    const [dateTo, setDateTo] = useState(null)
    const [dateFromString, setDateFromString] = useState("")
    const [dateToString, setDateToString] = useState("")
    const [leagueMatches, setLeagueMatches] = useState([])
    
    useEffect(() => {
        const get = async() => {
            const getMatches = await LeagueMatchesSelected(league.id, dateFromString, dateToString)
            if(!getMatches) return 
            setLeagueMatches(getMatches.matches)
        }
        get()
    },[dateFromString, dateToString])

    const convertDate = (value) => {
        if(Math.floor(value/10) === 0){
            return`0${value}`
        }
        else return value
    }

    const updateDateFrom = (newDateFrom) => {
        setDateFrom(newDateFrom)
        if(newDateFrom !== null){
            setDateFromString(`${newDateFrom.$y}-${convertDate(newDateFrom.$M+1)}-${convertDate(newDateFrom.$D)}`)
        }
    }
    const updateDateTo = (newDateTo) => {
        setDateTo(newDateTo)
        if(newDateTo !== null){
            setDateToString(`${newDateTo.$y}-${convertDate(newDateTo.$M+1)}-${convertDate(newDateTo.$D)}`)
        }
    }
    return(
        <>
        <Box m={2} underline="none">
            <Breadcrumbs my={2} >
                <Link  to   = "/Football_Stat" style={{ textDecoration: 'none' }} >
                <Typography variant='h4' color="primary.main">Лиги</Typography>
                </Link>
                <Typography variant='h5' letterSpacing={2} color="primary.main">{league.name}</Typography>
            </Breadcrumbs>
            <div align="left"  >
            <DatePickerMatches 
                    label="с"
                    date={dateFrom}
                    update={updateDateFrom}
                    maxDate={dateTo}
                />
                <DatePickerMatches
                    label="по"
                    date={dateTo}
                    update={updateDateTo}
                    minDate={dateFrom}
                />
            </div>
            </Box>
            <Box mt={3} >
            <DataGridMatches matches={leagueMatches} />
            
        </Box>
        </>
    )
}
export default LeagueMatches;