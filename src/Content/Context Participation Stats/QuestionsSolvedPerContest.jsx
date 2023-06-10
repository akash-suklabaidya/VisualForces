import React, { useContext, useEffect } from "react";
import { ApiService } from "../../API/ApiService";
import SearchContext from "../../Context/SearchContext";

async function fetchSubmissionActivity(userName) {
    try {
        const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
        const data = await ApiService(url);
        if (data && data.status === 'OK' && data.result) {
            const contests = {};
            const contestIds = [];
            data.result.forEach((submission) => {
                if (submission.verdict === 'OK' && submission.author.participantType === 'CONTESTANT') {
                    const contestId = submission.contestId;
                    if (!contestIds.includes(contestId)) {
                        contestIds.push(contestId);
                    }
                    contests[contestId] = contests[contestId] ? contests[contestId] + 1 : 1;
                }
            });
            const contestDetails = await fetchContestDetails(contestIds);
            const contestData = contestDetails.map((contest) => ({
                contestId: contest.id,
                contestName: contest.name,
                count: contests[contest.id] || 0,
            }));
            return contestData;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function fetchContestDetails(contestIds) {
    try {
        const url = `https://codeforces.com/api/contest.list`;
        const response = await ApiService(url);
        if (response && response.status === 'OK' && response.result) {
            const contestDetails = response.result.filter((contest) => contestIds.includes(contest.id));
            return contestDetails;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}




function QuestionsSolvedPerContest() {
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSubmissionActivity(searchValue);
        };

        fetchData();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
}


export { fetchSubmissionActivity };
export default QuestionsSolvedPerContest

