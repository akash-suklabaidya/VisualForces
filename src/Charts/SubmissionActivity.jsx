import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { ApiService } from '../API/ApiService';
import { Stack, Typography, Divider } from '@mui/material';

async function fetchSubmissionActivity(userName) {
    try {
        const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1&count=1000`;
        const data = await ApiService(url);
        if (data && data.status === 'OK' && data.result) {
            const submissionsByDate = data.result.reduce((acc, submission) => {
                const date = new Date(submission.creationTimeSeconds * 1000).toLocaleDateString();
                if (acc[date]) {
                    acc[date] += 1;
                } else {
                    acc[date] = 1;
                }
                return acc;
            }, {});
            const submissionData = Object.entries(submissionsByDate).map(([date, count]) => ({
                date: new Date(date),
                count,
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
    const [submissionData, setSubmissionData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (userName) {
                const data = await fetchSubmissionActivity(userName);
                setSubmissionData(data);
            } else {
                setSubmissionData([]);
            }
        };

        fetchData();
    }, [userName]);

    return (
        <Stack padding={5}>
            {submissionData.length > 0 ? (
                <>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontSize: { xs: '20px', md: '30px' } }}
                        color="gray"
                    >
                        Submission Activity
                    </Typography>
                    <Divider variant="middle" />
                    <div style={{ height: '350px', marginBottom: '20px' }}>
                        <CalendarHeatmap
                            startDate={new Date('2023-01-01')}
                            endDate={new Date('2023-12-31')}
                            values={submissionData}
                            classForValue={(value) => {
                                if (!value || value.count === 0) {
                                    return 'color-empty';
                                }
                                if (value.count <= 5) {
                                    return 'color-low';
                                }
                                if (value.count <= 10) {
                                    return 'color-medium';
                                }
                                return 'color-high';
                            }}
                            titleForValue={(value) =>
                                value ? `${value.date.toDateString()}\n${value.count} submissions` : 'No submissions'
                            }
                        />
                        <style>
                            {`
              .color-empty {
                fill: #ebedf0;
              }
              .color-low {
                fill: #c6e48b;
              }
              .color-medium {
                fill: #7bc96f;
              }
              .color-high {
                fill: #196127;
              }
            `}
                        </style>
                    </div>
                </>
            ) : (
                ""
            )}
        </Stack>
    );
}

export default React.memo(SubmissionActivity);
