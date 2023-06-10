import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchSubmissisonRate(searchValue) {

    try {
        const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
        const response = await ApiService(url);
        if (response && response.status === 'OK') {
            const submissions = response.result;
            const counts = {};

            for (let i = 0; i < submissions.length; i++) {
                const submission = submissions[i];
                const submissionDate = new Date(submission.creationTimeSeconds * 1000);
                const submissionDay = submissionDate.toDateString();

                counts[submissionDay] = (counts[submissionDay] || 0) + 1;
            }
            return counts;
        } else {
            return 0;
        }
    } catch (error) {
        console.error(error);
    }


}

function SubmissionPerDay() {
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const data = await fetchSubmissisonRate(searchValue);
        };

        fetchSubmissions();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
}


export { fetchSubmissisonRate }
export default SubmissionPerDay;
