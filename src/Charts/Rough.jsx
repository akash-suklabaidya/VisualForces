import React, { useContext } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Stack } from '@mui/material';
import { ContentContext } from '../Context/ContentContext';
import { Widgets } from '@mui/icons-material';

function Chart() {
    const { pageData } = useContext(ContentContext);

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

        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default React.memo(Chart);




// import axios from 'axios';

// async function getQuestionsSolvedInLiveContests(username) {
//     try {
//         // Step 1: Retrieve the list of contests
//         const contestsURL = 'https://codeforces.com/api/contest.list';
//         const contestsResponse = await axios.get(contestsURL);
//         const contests = contestsResponse.data.result;

//         // Step 2: Filter the contests to get only the live contests
//         const liveContests = contests.filter((contest) => contest.phase === 'BEFORE');

//         const questionsSolvedInLiveContests = [];

//         // Step 3: Fetch submissions for each live contest
//         for (const contest of liveContests) {
//             const contestId = contest.id;

//             const submissionsURL = `https://codeforces.com/api/contest.status?contestId=${contestId}&handle=${username}`;
//             const submissionsResponse = await axios.get(submissionsURL);
//             const submissions = submissionsResponse.data.result;

//             // Step 4: Count the number of questions solved in the contest
//             const questionsSolved = submissions.reduce(
//                 (count, submission) => (submission.verdict === 'OK' ? count + 1 : count),
//                 0
//             );

//             const contestInfo = {
//                 contestId: contestId,
//                 questionsSolved: questionsSolved,
//             };

//             questionsSolvedInLiveContests.push(contestInfo);
//         }

//         return questionsSolvedInLiveContests;
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// }

// // Usage:
// const username = 'akashsb';
// getQuestionsSolvedInLiveContests(username)
//     .then((result) => console.log(result))
//     .catch((error) => console.error('Error:', error));
