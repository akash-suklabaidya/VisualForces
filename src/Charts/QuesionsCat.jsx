import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ContentContext } from '../Context/ContentContext';
import { ApiService } from '../API/ApiService';
import { Stack, Typography, Grid } from '@mui/material';



const COLORS = [
    '#8884d8',
    '#83a6ed',
    '#8dd1e1',
    '#82ca9d',
    '#a4de6c',
    '#d0ed57',
    '#ffc658',
    '#ff7300',
    '#ff8500',
    '#ff9700',
    '#ffa900',
    '#ffbb00',
    '#ffd000',
    '#ffe200',
    '#fff400',
    '#d8f100',
    '#b3ed00',
    '#8ee800',
    '#69e300',
    '#44de00',
    '#1fda00',
    '#00d500',
    '#00b02a',
    '#00844e',
    '#005871',
    '#003195',
    '#6200b3',
    '#7f00a5',
    '#9c0098',
    '#b9008a',
    '#d6007d',
    '#f30070',
    '#ff0062',
    '#ff1944',
    '#ff3227',
    '#ff4b09',
    '#e66e00',
    '#cc9100',
    '#b4b400',
    '#9cd700',
];

async function fetchTypeOfProblemsSolved(searchValue) {
    try {
        const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
        const response = await ApiService(url);
        if (response && response.status === 'OK') {
            const submissions = response.result;
            const solvedTagsCount = {};

            submissions.forEach((submission) => {
                if (submission.verdict === 'OK') {
                    const problem = submission.problem;
                    const problemTags = problem.tags;

                    problemTags.forEach((tag) => {
                        if (tag in solvedTagsCount) {
                            solvedTagsCount[tag]++;
                        } else {
                            solvedTagsCount[tag] = 1;
                        }
                    });
                }
            });

            return solvedTagsCount;
        } else {
            return {};
        }
    } catch (error) {
        console.log(error);
        return {};
    }
}
const TagsChart = ({ userName }) => {
    const { pageData } = useContext(ContentContext);
    const input = pageData.Type;

    const [solvedTags, setSolvedTags] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (input && input.solvedTags) {
                const data = await fetchTypeOfProblemsSolved(userName);
                setSolvedTags(data);
            }
        };

        if (input) {
            fetchData();
        }
    }, [input, userName]);

    if (!input || !input.solvedTags || !solvedTags) {
        return null;
    }

    const data = Object.entries(solvedTags).map(([tag, count]) => ({ tag, count }));

    data.sort((a, b) => b.count - a.count);

    const maxDataPoints = 15;
    const visibleData = data.slice(0, maxDataPoints - 1);
    const remainingDataCount = data
        .slice(maxDataPoints - 1)
        .reduce((sum, entry) => sum + entry.count, 0);

    const othersDataPoint = {
        tag: 'Others',
        count: remainingDataCount,
    };

    visibleData.push(othersDataPoint);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={10} md={8}>
                <Stack padding={5}>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontSize: { xs: '20px', md: '30px' } }}
                        color="#565656"
                        fontWeight={400}
                    >
                        Tpoics distribution of {userName}
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={visibleData}
                                dataKey="count"
                                nameKey="tag"
                                label
                                outerRadius={140}
                                labelLine={false}
                            >
                                {visibleData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default TagsChart;