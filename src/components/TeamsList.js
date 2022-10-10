import { Grid } from "@mui/material"
import TeamCard from "./TeamCard";

function TeamList({ paginatedTeams }) {
    return (
        <Grid container spacing={2} my={0.5} justifyContent="center">
            {paginatedTeams.map((team) => (
                <TeamCard
                    idTeam={team.id}
                    name={team.name}
                    image={team.crestUrl}
                />
            ))}
        </Grid>
    )

}

export default TeamList;