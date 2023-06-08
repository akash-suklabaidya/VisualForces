import React, { useContext, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ApiService } from '../API/ApiService';
import SearchContext from '../Context/SearchContext';


function QuestionPerConChart() {
    const { searchValue } = useContext(SearchContext);
    const [contestData, setContestData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSubmissionActivity(searchValue);
            setContestData(data);
        };

        fetchData();
    }, [searchValue]);

    const fetchSubmissionActivity = async (userName) => {
        try {
            const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
            const data = await ApiService(url);
            if (data && data.status === 'OK' && data.result) {
                const contests = {};
                data.result.forEach((submission) => {
                    if (submission.verdict === 'OK' && submission.author.participantType === 'CONTESTANT') {
                        const contestId = submission.contestId;
                        const contestName = submission.contestName;
                        if (contests[contestId]) {
                            contests[contestId].count += 1;
                        } else {
                            contests[contestId] = { name: contestName, count: 1 };
                        }
                    }
                });
                const contestData = Object.values(contests);
                return contestData;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const renderCustomTooltip = ({ payload }) => {
        if (payload && payload.length) {
            const { name, count } = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p className="label">{`Contest: ${name}`}</p>
                    <p className="value">{`Questions Solved: ${count}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <LineChart data={contestData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" />
                    <YAxis />
                    <Tooltip content={renderCustomTooltip} />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" name="Questions Solved" dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default QuestionPerConChart;
