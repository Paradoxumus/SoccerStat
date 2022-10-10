import { Stack } from "@mui/system";
import {  TextField } from "@mui/material"

function SearchName({ query, update }) {
    return(
        <Stack direction = "row" ml={3} mt={2}>
            <TextField 
                label="Поиск..." 
                variant='outlined' 
                size='small'
                value={query}
                onChange={(e)=>update(e.target.value)}
            />
        </Stack>
    )
}

export default SearchName