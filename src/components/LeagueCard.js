import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import NoImage from '../Image/NoImage.jpg'

function LeagueCard({idLeague, name, country, areaFlag}) {
    
    const leagueLink = `/leagues/${idLeague}/matches`
    if(!areaFlag) {areaFlag = NoImage}
    return(
        <Grid item xs={2.5} margin={6} my={1}>
            <Card>
                <CardActionArea component={Link} to={leagueLink}>
                    <CardMedia 
                        component="img"
                        alt="Картинка лиги"
                        src={areaFlag}
                        sx={{ height: 160, pb: "10px" }}
                    />

<                   Typography sx={{ fontWeight: "bold" }} variant="h6">
                        {country}
                    </Typography>
                        
                    <Typography variant="overline" color="gray">
                        {name}
                    </Typography> 

                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default LeagueCard;