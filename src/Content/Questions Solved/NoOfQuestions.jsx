// import React, { useContext, useEffect, useState } from 'react';
// import { ApiService } from '../../API/ApiService';
// import SearchContext from '../../Context/SearchContext';

// function NoOfQuestions({ userHandle }) {

//     const { searchValue } = useContext(SearchContext);
//     const [solvedProblems, setSolvedProblems] = useState([]);


//     useEffect(() => {
//         const fetchUserSolvedProblems = async () => {
//             try {
//                 const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
//                 const data = await ApiService(url);

//                 if (data && data.status === 'OK') {
//                     const submissions = data.result;
//                     const solvedProblemsSet = new Set();

//                     submissions.forEach((submission) => {
//                         if (submission.verdict === 'OK') {
//                             const problem = submission.problem;
//                             const problemName = `${problem.contestId}${problem.index}`;

//                             solvedProblemsSet.add(problemName);
//                         }
//                     });

//                     setSolvedProblems(Array.from(solvedProblemsSet));
//                 } else {
//                     console.log('Error: Unable to fetch user submissions');
//                 }
//             } catch (error) {
//                 console.log('Error:', error.message);
//             }
//         };

//         fetchUserSolvedProblems();
//     }, [searchValue]);

//     return (
//         <div>
//             <h1>Solved Problems</h1>
//             {solvedProblems.length > 0 ? (
//                 <ul>
//                     {solvedProblems.map((problemName) => (
//                         <li key={problemName}>{problemName}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No solved problems found.</p>
//             )}
//         </div>
//     );
// };

// export default NoOfQuestions;


import React, { useContext, useEffect, useState } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchNoOfQuestions(searchValue) {
    try {
        const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
        const data = await ApiService(url);
        if (data && data.status === 'OK') {
            const submissions = data.result;
            const solvedProblemsSet = new Set();

            submissions.forEach((submission) => {
                if (submission.verdict === 'OK') {
                    const problem = submission.problem;
                    const problemName = `${problem.contestId}${problem.index}`;

                    solvedProblemsSet.add(problemName);
                }
            });

            return Array.from(solvedProblemsSet);
        } else {
            console.log('Error: Unable to fetch user submissions');
        }
    }
    catch (error) {
        console.error(error);
    }
}

function NoOfQuestions({ userHandle }) {

    const { searchValue } = useContext(SearchContext);
    const [solvedProblems, setSolvedProblems] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNoOfQuestions(searchValue);
            setSolvedProblems(data);
        };

        fetchData();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
};

export { fetchNoOfQuestions };
export default NoOfQuestions;