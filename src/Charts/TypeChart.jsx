import React, { useContext } from 'react';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { ContentContext } from '../Context/ContentContext';

const CategoryChart = () => {
    const { pageData } = useContext(ContentContext);
    const input = pageData.Type;
    console.log(input);

    if (!input || !input.solvedCategories) {
        return null;
    }

    const { solvedCategories } = input;

    const data = Object.entries(solvedCategories)
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => a.category.localeCompare(b.category));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" barSize={20} fill="#413ea0" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default CategoryChart;
