import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import NoImage from '../Image/NoImage.jpg'

function TeamCard({idTeam, name, image}) {
    const teamLink = `/teams/${idTeam}/matches`
    if(!image) {image = NoImage}
    return(
        <Grid item xs={2} margin={2} my={1}>
            <Card>
                <CardActionArea component={Link} to={teamLink}>
                    <CardMedia 
                        component="img"
                        alt="Картинка лиги"
                        src={image}
                        sx={{ height: 306, pb: "10px" }}
                    />
                    <Typography variant="overline" color="gray">
                        {name}
                    </Typography> 
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default TeamCard;