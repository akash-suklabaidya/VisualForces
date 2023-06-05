// // import React, { useEffect, useState } from 'react';
// // import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// // import { ApiService } from '../API/ApiService';

// // async function fetchSubmissionActivity(userName) {
// //     try {
// //         const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
// //         const data = await ApiService(url);
// //         if (data && data.status === 'OK' && data.result) {
// //             // Group submissions by date
// //             const submissionsByDate = data.result.reduce((acc, submission) => {
// //                 const date = new Date(submission.creationTimeSeconds * 1000).toLocaleDateString();
// //                 if (acc[date]) {
// //                     acc[date] += 1;
// //                 } else {
// //                     acc[date] = 1;
// //                 }
// //                 return acc;
// //             }, {});
// //             // Convert submissions by date to an array of objects
// //             const submissionData = Object.entries(submissionsByDate).map(([date, count]) => ({
// //                 date,
// //                 submissions: count,
// //             }));
// //             return submissionData;
// //         } else {
// //             return [];
// //         }
// //     } catch (error) {
// //         console.error(error);
// //         return [];
// //     }
// // }

// // function SubmissionActivity({ userName }) {
// //     const [submissionData, setSubmissionData] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             const data = await fetchSubmissionActivity(userName);
// //             setSubmissionData(data);
// //         };

// //         fetchData();
// //     }, [userName]);

// //     return (
// //         <ResponsiveContainer width="100%" height={400}>
// //             <LineChart data={submissionData}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="date" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line type="monotone" dataKey="submissions" name="Submissions" stroke="#8884d8" />
// //             </LineChart>
// //         </ResponsiveContainer>
// //     );
// // }

// // export default React.memo(SubmissionActivity);



// // import React, { useEffect, useState } from 'react';
// // import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// // import { ApiService } from '../API/ApiService';

// // async function fetchSubmissionActivity(userName) {
// //     try {
// //         const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
// //         const data = await ApiService(url);
// //         if (data && data.status === 'OK' && data.result) {
// //             // Group submissions by date
// //             const submissionsByDate = data.result.reduce((acc, submission) => {
// //                 const date = new Date(submission.creationTimeSeconds * 1000).toLocaleDateString();
// //                 if (acc[date]) {
// //                     acc[date] += 1;
// //                 } else {
// //                     acc[date] = 1;
// //                 }
// //                 return acc;
// //             }, {});
// //             // Convert submissions by date to an array of objects
// //             const submissionData = Object.entries(submissionsByDate).map(([date, count]) => ({
// //                 date,
// //                 submissions: count,
// //             }));
// //             return submissionData;
// //         } else {
// //             return [];
// //         }
// //     } catch (error) {
// //         console.error(error);
// //         return [];
// //     }
// // }

// // function SubmissionActivity({ userName }) {
// //     const [submissionData, setSubmissionData] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             const data = await fetchSubmissionActivity(userName);
// //             setSubmissionData(data);
// //         };

// //         fetchData();
// //     }, [userName]);

// //     return (
// //         <ResponsiveContainer width="100%" height={400}>
// //             <BarChart data={submissionData}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="date" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Bar dataKey="submissions" name="Submissions" fill="#8884d8" />
// //             </BarChart>
// //         </ResponsiveContainer>
// //     );
// // }

// // export default React.memo(SubmissionActivity);

// import React, { useEffect, useState } from 'react';
// import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// import { ApiService } from '../API/ApiService';

// async function fetchSubmissionActivity(userName) {
// try {
//     const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
//     const data = await ApiService(url);
//     if (data && data.status === 'OK' && data.result) {
//         // Group submissions by date
//         const submissionsByDate = data.result.reduce((acc, submission) => {
//             const date = new Date(submission.creationTimeSeconds * 1000).toLocaleDateString();
//             if (acc[date]) {
//                 acc[date] += 1;
//             } else {
//                 acc[date] = 1;
//             }
//             return acc;
//         }, {});
//         // Convert submissions by date to an array of objects
//         const submissionData = Object.entries(submissionsByDate).map(([date, count]) => ({
//             date,
//             submissions: count,
//         }));
//         return submissionData;
//     } else {
//         return [];
//     }
// } catch (error) {
//     console.error(error);
//     return [];
// }
// }

// function SubmissionActivity({ userName }) {
//     const [submissionData, setSubmissionData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchSubmissionActivity(userName);
//             setSubmissionData(data);
//         };

//         fetchData();
//     }, [userName]);

//     return (
//         <ResponsiveContainer width="100%" height={400}>
//             <BarChart data={submissionData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip
//                     formatter={(value) => `${value} submissions`}
//                     labelFormatter={(label) => `Date: ${label}`}
//                 />
//                 <Legend />
//                 <Bar dataKey="submissions" name="Submissions" fill="#82ca9d" />
//             </BarChart>
//         </ResponsiveContainer>
//     );
// }

// export default React.memo(SubmissionActivity);



// import React, { useEffect, useState } from 'react';
// import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Heatmap, Label } from 'recharts';
// import { ApiService } from '../API/ApiService';

// async function fetchSubmissionActivity(userName) {
//     // Same implementation as before
// }

// function SubmissionActivity({ userName }) {
//     const [submissionData, setSubmissionData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchSubmissionActivity(userName);
//             setSubmissionData(data);
//         };

//         fetchData();
//     }, [userName]);

//     return (
//         <ResponsiveContainer width="100%" height={400}>
//             <Heatmap
//                 data={submissionData}
//                 xAxisId="date"
//                 yAxisId="submissions"
//                 colorScale={['#f9e7d3', '#f3b49f', '#ed7d6a', '#e44b36']}
//                 forceSquare
//             >
//                 <CartesianGrid stroke="#ccc" />
//                 <XAxis dataKey="date" type="category" scale="band">
//                     <Label value="Date" position="insideBottom" dy={10} />
//                 </XAxis>
//                 <YAxis dataKey="submissions" type="category" scale="band">
//                     <Label angle={-90} value="Submissions" position="insideLeft" />
//                 </YAxis>
//                 <Tooltip
//                     formatter={(value) => `${value} submissions`}
//                     labelFormatter={(label) => `Date: ${label}`}
//                 />
//                 <Legend />
//             </Heatmap>
//         </ResponsiveContainer>
//     );
// }

// export default React.memo(SubmissionActivity);

import React, { useEffect, useRef } from 'react';
import { ApiService } from '../API/ApiService';
import Heatmap from 'heatmap.js';

async function fetchSubmissionActivity(userName) {
    try {
        const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
        const data = await ApiService(url);
        if (data && data.status === 'OK' && data.result) {
            // Group submissions by date
            const submissionsByDate = data.result.reduce((acc, submission) => {
                const date = new Date(submission.creationTimeSeconds * 1000).toLocaleDateString();
                if (acc[date]) {
                    acc[date] += 1;
                } else {
                    acc[date] = 1;
                }
                return acc;
            }, {});
            // Convert submissions by date to an array of objects
            const submissionData = Object.entries(submissionsByDate).map(([date, count]) => ({
                date,
                submissions: count,
            }));
            return submissionData;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

function SubmissionActivity({ userName }) {
    const heatmapRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSubmissionActivity(userName);
            createHeatmap(data);
        };

        fetchData();
    }, [userName]);

    const createHeatmap = (data) => {
        const heatmapInstance = Heatmap.create({
            container: heatmapRef.current,
            radius: 15,
            maxOpacity: 0.6,
            gradient: {
                0.1: '#ebedf0',
                0.2: '#c6e48b',
                0.4: '#7bc96f',
                0.6: '#239a3b',
                0.8: '#196127',
                1.0: '#196127',
            },
        });

        const heatmapData = data.map(({ date, submissions }) => ({
            x: new Date(date),
            y: submissions,
            value: submissions,
        }));

        heatmapInstance.setData({
            max: Math.max(...heatmapData.map((d) => d.value)),
            min: 0,
            data: heatmapData,
        });
    };

    return <div ref={heatmapRef} style={{ width: '100%', height: '400px' }}></div>;
}

export default React.memo(SubmissionActivity);



