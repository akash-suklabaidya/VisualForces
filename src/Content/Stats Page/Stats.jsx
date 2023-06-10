
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import SearchContext from '../../Context/SearchContext';
import { ApiService } from '../../API/ApiService';
import { useEffect, useState } from 'react';
import { Grid, Divider } from '@mui/material';

async function fetchContestStats(handle) {
    try {
        const ratingURL = `https://codeforces.com/api/user.rating?handle=${handle}`;
        const ratingData = await ApiService(ratingURL);

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

            const changes = ratingData.result.reduce(
                (obj, change) => {
                    const ratChange = change.newRating - change.oldRating;
                    return {
                        max: Math.max(obj.max || ratChange, ratChange),
                        min: Math.min(obj.min || ratChange, ratChange),
                    };
                },
                {}
            );

            const minRatingDown = changes.min;
            const maxRatingUp = changes.max;

            return {
                minRank,
                maxRank,
                numberOfContest,
                minRatingDown,
                maxRatingUp,
            };
        }
    } catch (error) {
        console.error('Error fetching contest stats:', error);
    }
}

async function fetchOverallStats(handle) {
    try {
        const submissionsUrl = `https://codeforces.com/api/user.status?handle=${handle}`;
        const submissionsResponse = await ApiService(submissionsUrl);
        let totalSubmission = 0;

        if (submissionsResponse && submissionsResponse.status === 'OK') {
            totalSubmission = submissionsResponse.result.length;

            const triedProblems = new Set();
            const correctProblems = new Set();

            submissionsResponse.result.forEach((submission) => {
                if (submission.problem) {
                    const problemId = submission.problem.contestId + submission.problem.index;
                    triedProblems.add(problemId);
                }
            });

            submissionsResponse.result.forEach((submission) => {
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
    } catch (error) {
        console.error('Error fetching overall stats:', error);
    }
}

export default function Stats() {
    const { searchValue } = React.useContext(SearchContext);
    const [ratingChanges, setRatingChanges] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const overallStats = await fetchOverallStats(searchValue);
                setRatingChanges((prevRatingChanges) => ({
                    ...prevRatingChanges,
                    overallStats,
                }));

                // setTimeout(async () => {
                const contestStats = await fetchContestStats(searchValue);
                setRatingChanges((prevRatingChanges) => ({
                    ...prevRatingChanges,
                    contestStats,
                }));
                // }, 2000); // Delayed execution of 2 seconds
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchValue) {
            fetchData();
        }
    }, [searchValue]);



    if (ratingChanges.overallStats === undefined || ratingChanges.contestStats === undefined) {
        return null;
    }

    return (
        <Stack display="flex" alignItems="center" justifyContent="center" paddingTop={10}>
            {searchValue ? (
                <Card sx={{ maxWidth: 400, width: '100%' }}>
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" fontSize={23} fontWeight={30}>
                            Some numbers of {searchValue}
                        </Typography>
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Number Of Contest */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Number Of Contest:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.contestStats?.numberOfContest}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Total Submissions */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Total Submissions:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.overallStats?.totalSubmission}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Total Questions Tried */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Total Questions Tried:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.overallStats?.totalTried}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Total Questions Solved */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Total Questions Solved:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.overallStats?.totalSolved}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Max Rating Up */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Max Rating Up:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.contestStats?.maxRatingUp}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Max Rating Down */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Max Rating Down:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.contestStats?.minRatingDown}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                            {/* Best Rank */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Best Rank:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.contestStats?.minRank}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
                            {/* Worst Rank */}
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={14}>
                                    Worst Rank:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                    {ratingChanges.contestStats?.maxRank}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ) : (
                " "
            )}
        </Stack>
    );
}
