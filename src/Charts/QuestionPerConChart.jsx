import React, { useContext } from 'react';
import { ContentContext } from '../Context/ContentContext';
import SearchContext from '../Context/SearchContext';
import { Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function QuestionPerConChart() {
    const { pageData } = useContext(ContentContext);
    const { searchValue } = useContext(SearchContext);

    const response = pageData.prob;

    if (!response || response.length === 0) {
        return <div>No data available.</div>;
    }

    const chartData = response.map((item) => ({
        contestName: item.contestName,
        count: item.count,
    }));

    return (
        <div>
            <Typography variant="h5" align="center" sx={{ fontSize: { xs: '20px', md: '30px' }, mb: 4 }}>
                Questions Solved Per Contest by {searchValue}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="contestName" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="count" fill="#82ca9d" barSize={30} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default QuestionPerConChart;
