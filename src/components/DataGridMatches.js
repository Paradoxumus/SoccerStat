import * as React from 'react';
import { NestCamWiredStandTwoTone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function DataGridMatches ({matches}){
    const [pageSize, setPageSize] = React.useState(12);
    if(!matches.length) return (
            
            <Typography>К сожалению, на этот момент данных нет</Typography>
        )
    
    const checkScore = (value) => {
        if (value === null) {
          return "--"
        } else {
          return value
        }
      }

    /*----статус матча-----*/
    const statusMatches = {
        SCHEDULED: "Запланирован",
        LIVE: "В прямом эфире",
        IN_PLAY: "В игре",
        PAUSED: "Пауза",
        FINISHED: "Завершён",
        POSTPONED: "Отложен",
        SUSPENDED: "Приостановлен",
        CANCELED: "Отменён"
      }
      const columns = [
        {
          field: 'date',
          headerName: 'Дата',
          width: 150,
          editable: true,
        },
        {
            field: 'time',
            headerName: 'Время',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Статус',
            width: 150,
            editable: true,
        },
        {
            field: 'host',
            headerName: 'Хозяин',
            width: 150,
            editable: true,
        },
        {
            field: 'visitor',
            headerName: 'Гость',
            width: 150,
            editable: true,
        },
        {
            field: 'score',
            headerName: 'Счет',
            width: 150,
            editable: true,
        },
        {
            field: 'extraScore',
            headerName: 'Доп. время',
            width: 150,
            editable: true,
        },
        {
            field: 'penalties',
            headerName: 'Пенальти',
            width: 150,
            editable: true,
        }]
        const checkid = (check) => {
            console.log(check)
            return check

        }
        const rows = matches.map((match) => ({
            id: checkid(match.id),
            date: new Date(match.utcDate).toLocaleDateString(),
            time: new Date(match.utcDate).toLocaleTimeString(),
            status: statusMatches[match.status],
            host: match.homeTeam.name,
            visitor: match.awayTeam.name,
            score: `${checkScore(match.score.fullTime.homeTeam)} : ${checkScore(match.score.fullTime.awayTeam)}`,
            extraScore: `${checkScore(match.score.extraTime.homeTeam)} : ${checkScore(match.score.extraTime.awayTeam)}`,
            penalties: `${checkScore(match.score.penalties.homeTeam)} : ${checkScore(match.score.penalties.awayTeam)}`
        }))

    
        
    return(
        <Box sx={{ height: '76.2vh', margin: 2}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[12, 100]}
            />
        </Box>
    )
}

export default DataGridMatches;