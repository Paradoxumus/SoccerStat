import { getLeagueMatches } from "../API";

const LeagueMatchesSelected = (leaqueId, strDateFrom, strDateTo) => {//из fetch
    if(strDateFrom.length === 10 && strDateTo.length === 10){
        return getLeagueMatches(leaqueId, strDateFrom, strDateTo)
    } else{
        return getLeagueMatches(leaqueId, "", "")
    }
}

export default LeagueMatchesSelected;