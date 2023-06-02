import { FormatColorResetOutlined } from '@mui/icons-material';
import React, { useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import SearchContext from '../Context/SearchContext';
import { ContentContext } from '../Context/ContentContext';



const COLORS = [
    '#ff9700',
    '#ffa900',
    '#ffbb00',
    '#8884d8',
    '#83a6ed',
    '#8dd1e1',
    '#82ca9d',
    '#a4de6c',
    '#d0ed57',
    '#ffc658',
    '#ff7300',
    '#ff8500',


    '#ffd000',
    '#8884d8',
    '#83a6ed',
    '#8dd1e1',
    '#82ca9d',
    '#ffe200',
    '#fff400',
    '#d8f100',

    '#a4de6c',
    '#d0ed57',
    '#ffc658',

    '#b3ed00',
    '#8ee800',
    '#69e300',
    '#44de00',
    '#1fda00',
    '#ff1944', '#ff3227', '#ff4b09',
    '#00d500',
    '#00b02a', '#d6007d', '#f30070', '#ff0062', '#e66e00', '#cc9100', '#b4b400',
    '#9cd700'
];



const TagsChart = () => {

    const { searchValue } = useContext(SearchContext);
    const { pageData } = useContext(ContentContext);
    const input = pageData.Type;

    if (!input || !input.solvedTags) {
        return null;
    }

    const { solvedTags } = input;

    const data = Object.entries(solvedTags)
        .map(([tags, count]) => ({ tags, count }));

    // const data = [
    //     { tag: '2-sat', count: 5 },
    //     { tag: '*special', count: 181 },
    //     { tag: '*special', count: 181 },
    //     { tag: '*special', count: 181 },
    //     { tag: '*special', count: 181 },
    // ];
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="tags"
                    label
                    outerRadius={150}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TagsChart;
