import { Grid } from "@mui/material"
import LeagueCard from './LeagueCard.js'

function LeaguesList({paginatedLeagues}){
    return(
        <Grid container spacing={2}  my={0.5} justifyContent="center">
          {paginatedLeagues.map((league) => (
            <LeagueCard
                idLeague={league.id}
                name={league.area.name}
                country={league.name}
                areaFlag={league.area.ensignUrl}
            />
          ))}
        </Grid>
    )

}

export default LeaguesList;