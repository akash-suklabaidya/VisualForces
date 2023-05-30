

import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

function SubmissionPerDay() {
    const { searchValue } = useContext(SearchContext);
    const [submissionCounts, setSubmissionCounts] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;

            try {
                const response = await ApiService(url);
                if (response && response.status === 'OK') {
                    const submissions = response.result;
                    const submissionCountsPerDay = countSubmissionsPerDay(submissions);
                    setSubmissionCounts(submissionCountsPerDay);
                } else {
                    console.log('Error: Failed to retrieve submissions');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchSubmissions();
    }, [searchValue]);

    // Function to count submissions per day
    const countSubmissionsPerDay = (submissions) => {
        const counts = {};

        // Iterate over each submission
        for (let i = 0; i < submissions.length; i++) {
            const submission = submissions[i];
            const submissionDate = new Date(submission.creationTimeSeconds * 1000);
            const submissionDay = submissionDate.toDateString();

            // Increment the count for the submission day
            counts[submissionDay] = (counts[submissionDay] || 0) + 1;
        }

        return counts;
    };

    return (
        <div>
            <h1>Submission Counts per Day</h1>
            {Object.keys(submissionCounts).map((day) => (
                <p key={day}>
                    {day}: {submissionCounts[day]}
                </p>
            ))}
        </div>
    );
}

export default SubmissionPerDay;
