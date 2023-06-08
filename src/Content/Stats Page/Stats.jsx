import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import SearchContext from '../../Context/SearchContext';

import { ApiService } from '../../API/ApiService';
import { useEffect, useState } from 'react';

async function fetchContestStats(handle) {
    console.log(handle);
    const ratingURL = `https://codeforces.com/api/user.rating?handle=${handle}`;
    const ratingData = await ApiService(ratingURL);
    console.log(ratingData);

    if (ratingData && ratingData.status === 'OK') {
        const result = ratingData.result;
        let maxRank = -1e8;
        let minRank = 1e8;
        const numberOfContest = ratingData.result.length;
        for (let i = 0; i < result.length; i++) {
            let rank = result[i].rank;
            if (rank > maxRank) {
                maxRank = rank;
            }
            if (rank < minRank) {
                minRank = rank;
            }
        }

        const changes = ratingData.result.reduce((obj, change) => {
            const ratChange = change.newRating - change.oldRating;
            return {
                max: Math.max(obj.max || ratChange, ratChange),
                min: Math.min(obj.min || ratChange, ratChange),
            };
        }, {});
        const minRatingDown = changes.min;
        const maxRatingUp = changes.max;
        return {
            minRank,
            maxRank,
            numberOfContest,
            minRatingDown,
            maxRatingUp
        }

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
            setRatingChanges((prevRatingChanges) => ({
                ...prevRatingChanges,
                overallStats,
            }));

            setTimeout(async () => {
                const contestStats = await fetchContestStats(searchValue);
                setRatingChanges((prevRatingChanges) => ({
                    ...prevRatingChanges,
                    contestStats,
                }));
            }, 2000); // Delayed execution of 2 seconds
        };

        fetchData();
    }, [searchValue]);

    console.log(ratingChanges);


    return (
        <Stack display="flex" alignItems="center" justifyContent="center">
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        XYZ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        MaxUp :-
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}