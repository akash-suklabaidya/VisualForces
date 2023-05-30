import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Stack } from '@mui/material';

function Chart() {
    const data = [
        { name: 'Jan', value: 100 },
        { name: 'Feb', value: 200 },
        { name: 'Mar', value: 150 },
        { name: 'Apr', value: 300 },
        { name: 'May', value: 400 },
        { name: 'Jun', value: 150 },
        { name: 'Jun', value: 550 },
        { name: 'Jun', value: 550 },
        { name: 'Jun', value: 230 },
        { name: 'Jun', value: 230 },
        { name: 'Jun', value: 25 },
        { name: 'Jun', value: 250 },
        { name: 'Jun', value: 20 },
        { name: 'Jun', value: 20 },
        { name: 'Jun', value: 25 },
        { name: 'Jun', value: 450 },
        { name: 'Jun', value: 250 },
        { name: 'Jun', value: 250 },
    ];

    return (
        <Stack
            display='flex'
            width='100%'
            height='100vh'
            justifyContent='center'
            alignItems='center'
        >
            <Stack width='80%' height='400px'>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
        </Stack>
    );
}

export default Chart;
