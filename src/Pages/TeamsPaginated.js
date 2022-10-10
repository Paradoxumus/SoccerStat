import { Pagination, Stack } from "@mui/material"
import SearchName from "../components/Search"
import { useState } from "react"
import TeamList from "../components/TeamsList"
import FilterList from "../components/FilterList"

function TeamsPaginated({ teams }) {

    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value)
    }

    const update = (newQuery) => {
        setQuery(newQuery)
    }
    const filtred = FilterList(query, teams)
    const contentPerPage = 10
    const lastIndex = page * contentPerPage
    const firstIndex = lastIndex - contentPerPage
    console.log(filtred)
    const pageTeamCount =  Math.ceil(filtred.length / contentPerPage)
    const teamArray = filtred.slice(firstIndex, lastIndex)


    return (
        <>
            <SearchName query={query} update={update} />
            <Stack alignItems="center">
                <TeamList paginatedTeams={teamArray} />
                <Pagination
                    size="large"
                    shape="rounded"
                    count={pageTeamCount}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </>
    )
}
export default TeamsPaginated;