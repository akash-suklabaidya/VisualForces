import React, { useContext } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import { Stack, Typography } from '@mui/material';
import { ContentContext } from '../Context/ContentContext';
import SearchContext from '../Context/SearchContext';

function RatingChanges() {
    const { pageData } = useContext(ContentContext);
    const { searchValue } = useContext(SearchContext);

    const input = pageData.ratChange;

    if (!input || input.length === 0 || !input[0]?.contestName) {
        return null;
    }

    const data = [];
    for (let i = 0; i < input.length; i++) {
        data.push({ name: input[i].contestName, value: input[i].ratingChange });
    }

    return (

        <Stack paddingTop={10}>
            <Typography variant='h5' align='center'
                sx={{ fontSize: { xs: '20px', md: '30px' } }}
            >
                Rating Changes of {searchValue}
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Contest" position="insideBottom" dy={20} />
                    </XAxis>
                    <YAxis>
                        <Label value="Rating Changes" position="insideLeft" angle={-90} />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Stack>
    );
}

export default React.memo(RatingChanges);
