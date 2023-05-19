import React, { useEffect, useState } from 'react';
import { ApiService } from '../../API/ApiService';

function SubmissionPerDay({ handle }) {
    const [submission, setSubmission] = useState({});

    useEffect(() => {
        const fetchData = async () => {

            const ratingUrl = `https://codeforces.com/api/user.rating?handle=${handle}`;
            const data = await ApiService(ratingUrl);

            if (data && data.status === 'OK') {
                const submissions = data.result;
                const submissionsPerDay = {};

                // Group submissions by day
                submissions.forEach((submission) => {
                    const submissionTime = new Date(submission.creationTimeSeconds * 1000);
                    const submissionDate = submissionTime.toDateString();

                    if (submissionsPerDay.hasOwnProperty(submissionDate)) {
                        submissionsPerDay[submissionDate].push(submission);
                    } else {
                        submissionsPerDay[submissionDate] = [submission];
                    }
                });

                setSubmission(submissionsPerDay)

            } else {
                setSubmission({});
            }
        };

        fetchData();
    }, [handle]);

    console.log(submission);

    return (
        <div>
            Rona Mat
        </div>
    );
}

export default SubmissionPerDay;
