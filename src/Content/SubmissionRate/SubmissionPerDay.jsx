import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

function SubmissionPerDay({ fromDate, toDate }) {
    const { searchValue } = useContext(SearchContext);
    const [submissionCount, setSubmissionCount] = useState(null);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const url = `https://codeforces.com/api/user.status?searchValue=${searchValue}&from=${fromDate}&to=${toDate}`;

            try {
                const response = await ApiService(url);
                if (response && response.status === 'OK') {
                    const submissions = response.result;
                    const count = submissions.length;
                    setSubmissionCount(count);
                }
                else {
                    console.log('Error: Failed to retrieve submissions');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchSubmissions();
    }, [searchValue, fromDate, toDate]);

    return (
        <div>
            {submissionCount !== null ? (
                <p>
                    Number of submissions on Codeforces for user {searchValue} on the specified day: {submissionCount}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SubmissionPerDay;


