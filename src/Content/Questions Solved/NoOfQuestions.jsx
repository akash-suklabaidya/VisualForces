import React, { useEffect, useState } from 'react';
import { ApiService } from '../../API/ApiService';

function NoOfQuestions({ userHandle }) {
    const [solvedProblems, setSolvedProblems] = useState([]);


    useEffect(() => {
        const fetchUserSolvedProblems = async () => {
            try {
                const url = `https://codeforces.com/api/user.status?handle=${userHandle}`;
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

                    setSolvedProblems(Array.from(solvedProblemsSet));
                } else {
                    console.log('Error: Unable to fetch user submissions');
                }
            } catch (error) {
                console.log('Error:', error.message);
            }
        };

        fetchUserSolvedProblems();
    }, [userHandle]);

    return (
        <div>
            <h1>Solved Problems</h1>
            {solvedProblems.length > 0 ? (
                <ul>
                    {solvedProblems.map((problemName) => (
                        <li key={problemName}>{problemName}</li>
                    ))}
                </ul>
            ) : (
                <p>No solved problems found.</p>
            )}
        </div>
    );
};

export default NoOfQuestions;