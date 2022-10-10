const urlCompetitions = "https://api.football-data.org/v2/competitions/"
const urlTeams = "https://api.football-data.org/v2/teams/"

export const getLeagues = async () => {
  const response = await fetch(urlCompetitions, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    console.error("Не удалось получить данные по лигам")
    return null
  }
}
export const getTeams = async () => {
  const response = await fetch(urlTeams, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    console.error("Не удалось получить данные по командам")
    return null
  }
}
export const getLeagueMatches = async (idLeague, dateFromLeague, dateToLeague) => {
  const response = await fetch(`https://api.football-data.org/v2/competitions/${idLeague}/matches?dateFrom=${dateFromLeague}&dateTo=${dateToLeague}`,{
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    console.error("Не удалось получить данные по матчам лиги")
    return null
  }
}
export const getTeamMatches = async (idTeam, dateFromTeam, dateToTeam) => {
  const response = await fetch(`https://api.football-data.org/v2/teams/${idTeam}/matches?dateFrom=${dateFromTeam}&dateTo=${dateToTeam}`,{
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    console.error("Не удалось получить данные по матчам лиги")
    return null
  }
}