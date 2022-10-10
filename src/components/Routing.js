import { Routes, Route, Navigate } from "react-router-dom"
import { getLeagues, getTeams } from '../API.js';
import { useEffect, useState } from "react"
import LeaguesPaginated from '../Pages/LeaguesPaginated.js';
import TeamsPaginated from "../Pages/TeamsPaginated.js";
import LeagueMatches from "../Pages/LeagueMatches.js";
import TeamMatches from "../Pages/TeamMatches.js";

function Routing() {
  const [leagues, setLeagues] = useState([])
  useEffect(() => {
    const fetchDataLeagues = async () => {
      const jsonLeagues = await getLeagues()
      if (!jsonLeagues) return
      console.log("jsonLeagues", jsonLeagues.competitions)
      setLeagues(jsonLeagues.competitions)
    }
    fetchDataLeagues()
  }, [])
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const fetchDataTeams = async () => {
      const jsonTeams = await getTeams()
      if (!jsonTeams) return
      setTeams(jsonTeams.teams)
    }
    fetchDataTeams()
  }, [])

  const leagueMatchesRoute = leagues.map((league) => (
    <Route path={`/leagues/${league.id}/matches`}
      element={<LeagueMatches league={league} />} key={league.id}/>
  ))
  const teamsMatchesRoute = teams.map((team) => (
    <Route path={`/teams/${team.id}/matches`}
      element={<TeamMatches team={team} />} key={team.id}/>
  ))

  return (
    <Routes>
      <Route path="/SoccerStat"
        element={<LeaguesPaginated leagues={leagues} />} />
      <Route path="/teams"
        element={<TeamsPaginated teams={teams} />} />
      {leagueMatchesRoute}
      {teamsMatchesRoute}
      <Route path="*" element={<Navigate to="/SoccerStat" />} />
    </Routes>
  )
}
export default Routing 