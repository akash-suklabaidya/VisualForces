import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, Dot } from 'recharts';
import { Stack, Typography } from '@mui/material';
import { ApiService } from '../API/ApiService';

async function fetchRatingChanges(userName) {
    try {
        const url = `https://codeforces.com/api/user.rating?handle=${userName}`;
        const data = await ApiService(url);
        if (data && data.status === 'OK' && data.result) {
            const ratingChanges = data.result.map((contest) => ({
                contestName: contest.contestName,
                ratingChange: contest.newRating - contest.oldRating,
                currRating: contest.newRating,
            }));
            return ratingChanges;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

function RatingChanges({ userName }) {
    const [ratingChanges, setRatingChanges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRatingChanges(userName);
            setRatingChanges(data);
        };

        fetchData();
    }, [userName]);

    if (ratingChanges.length === 0 || !ratingChanges[0]?.contestName) {
        return null;
    }

    const highestRating = Math.max(...ratingChanges.map((contest) => contest.currRating));

    const data = ratingChanges.map((contest) => ({
        name: contest.contestName,
        ratChange: contest.ratingChange,
        curRat: contest.currRating,
        isHighest: contest.currRating === highestRating ? contest.currRating : null,
    }));

    return (
        <Stack padding={5}>
            <Typography variant="h5" align="center" sx={{ fontSize: { xs: '20px', md: '30px' } }}
                color='#565656'
                fontWeight={400}
            >
                Rating Changes of {userName}
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line
                        type="monotone"
                        dataKey="curRat"
                        stroke="#8884d8"
                        dot={<Dot r={4} />}
                        strokeWidth={1}
                        isAnimationActive={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="isHighest"
                        stroke="#ff0000"
                        dot={<Dot r={4} fill="#ff0000" />}
                        strokeWidth={2}
                        isAnimationActive={false}
                    />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Contest" position="insideBottom" dy={10} />
                    </XAxis>
                    <YAxis>
                        <Label value="Ratings" position="insideLeft" angle={-90} />
                    </YAxis>
                    <Tooltip formatter={(value, name) => [value, name === 'curRat' ? 'Current Rating' : 'Rating Change']} />
                    <Legend align="right" verticalAlign="top" />
                </LineChart>
            </ResponsiveContainer>
        </Stack>
    );
}

export default React.memo(RatingChanges);
