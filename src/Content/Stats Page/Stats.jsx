import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { ContentContext } from '../../Context/ContentContext';
import SearchContext from '../../Context/SearchContext';

import { ApiService } from '../../API/ApiService';
import { useEffect, useState } from 'react';

async function fetchContestStats(handle) {
    const ratingURL = `https://codeforces.com/api/user.rating?handle=${handle}`;
    const ratingData = await ApiService(ratingURL);

    if (ratingData && ratingData.status === 'OK') {

    }

}

async function fetchOverallStats(handle) {
    const submissionsUrl = `https://codeforces.com/api/user.status?handle=${handle}`;
    const submissionsResponse = await ApiService(submissionsUrl);
    let totalSubmission = 0;
    if (submissionsResponse && submissionsResponse.status === 'OK') {
        totalSubmission = submissionsResponse.result.length;

        const triedProblems = new Set();
        const correctProblems = new Set();
        submissionsResponse.result.forEach(submission => {
            if (submission.problem) {
                const problemId = submission.problem.contestId + submission.problem.index;
                triedProblems.add(problemId);
            }
        });
        submissionsResponse.result.forEach(submission => {
            if (submission.verdict === 'OK' && submission.problem) {
                const problemId = submission.problem.contestId + submission.problem.index;
                correctProblems.add(problemId);
            }
        });

        const totalTried = triedProblems.size;
        const totalSolved = correctProblems.size;

        return {
            totalSubmission,
            totalTried,
            totalSolved,
        };
    }
}

export default function Stats() {
    const { searchValue } = React.useContext(SearchContext);
    const [ratingChanges, setRatingChanges] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const overallStats = await fetchOverallStats(searchValue);
            const contestStats = await fetchContestStats(searchValue);
            setRatingChanges({ overallStats, contestStats });
        };

        fetchData();
    }, [searchValue]);

    return (
        <Stack display='flex' alignItems='center' justifyContent='center'>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        XYZ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}

// import { ApiService } from '../../API/ApiService';

// async function fetchContestStats(handle, contestId) {
//     try {
//         // Fetch user's rating changes
//         const ratingUrl = `https://codeforces.com/api/user.rating?handle=${handle}`;
//         const ratingData = await ApiService(ratingUrl);

//         // Calculate max rating up and down
//         let maxRatingUp = 0;
//         let maxRatingDown = 0;
//         if (ratingData && ratingData.status === 'OK') {
//             ratingData.result.forEach(change => {
//                 maxRatingUp = Math.max(maxRatingUp, change.newRating - change.oldRating);
//                 maxRatingDown = Math.min(maxRatingDown, change.newRating - change.oldRating);
//             });
//         }

//         // Fetch user's submissions for the contest
//         const submissionsUrl = `https://codeforces.com/api/contest.status?contestId=${contestId}&handle=${handle}`;
//         const submissionsData = await ApiService(submissionsUrl);

//         // Calculate total submissions, accepted submissions, and tried questions
//         let totalSubmissions = 0;
//         let totalAccepted = 0;
//         let totalTried = 0;
//         let bestRank = Infinity;
//         let worstRank = 0;

//         if (submissionsData && submissionsData.status === 'OK') {
//             submissionsData.result.forEach(submission => {
//                 totalSubmissions++;
//                 if (submission.verdict === 'OK') {
//                     totalAccepted++;
//                 }
//                 if (submission.problem) {
//                     totalTried++;
//                 }
//                 if (submission.rank) {
//                     bestRank = Math.min(bestRank, submission.rank);
//                     worstRank = Math.max(worstRank, submission.rank);
//                 }
//             });
//         }

//         return {
//             maxRatingUp,
//             maxRatingDown,
//             bestRank,
//             worstRank,
//             totalSubmissions,
//             totalAccepted,
//             totalTried,
//         };
//     } catch (error) {
//         console.log(error);
//         return {};
//     }
// }

// export default fetchContestStats;
