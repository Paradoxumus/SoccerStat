import {  Pagination, Stack } from "@mui/material"
import SearchName from "../components/Search"
import { useState } from "react"
import LeaguesList from "../components/LeaguesList"
import FilterList from "../components/FilterList"

function LeaguesPaginated({ leagues }) {

    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value)
    }

    const update = (newQuery) => {
        setQuery(newQuery)
    }

    const filtred = FilterList(query, leagues)
    const contentPerPage = 9
    const lastIndex = page * contentPerPage
    const firstIndex = lastIndex - contentPerPage

    const pageLeagueCount = Math.ceil(filtred.length / contentPerPage)
    const leagueArray = filtred.slice(firstIndex, lastIndex)


    return (
        <>
            <SearchName query={query} update={update} />
            <Stack alignItems="center">
                <LeaguesList paginatedLeagues={leagueArray} />
                <Pagination
                    size="large"
                    shape="rounded"
                    count={pageLeagueCount}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </>
    )
}
export default LeaguesPaginated