import { getTeamMatches } from "../API";

const TeamMatchesSelected = (TeamId, strDateFrom, strDateTo) => {//из fetch
    if(strDateFrom.length === 10 && strDateTo.length === 10){
        return getTeamMatches(TeamId, strDateFrom, strDateTo)
    } else{
        return getTeamMatches(TeamId, "", "")
    }
}

export default TeamMatchesSelected;