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
            return {};
        }
    }
    catch (error) {
        console.error(error);
    }
}

function NoOfQuestions({ userHandle }) {

    const { searchValue } = useContext(SearchContext);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNoOfQuestions(searchValue);
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