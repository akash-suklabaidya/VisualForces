import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchNumberOfContestParticipated(searchValue) {
    const ratingUrl = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
    const ratingData = await ApiService(ratingUrl);
    if (ratingData && ratingData.status === 'OK') {
        return ratingData.result.length;
    } else {
        return 0;
    }
}

function NumberOfContestParticipated() {

    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNumberOfContestParticipated(searchValue);
        };

        fetchData();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
}

export { fetchNumberOfContestParticipated };
export default NumberOfContestParticipated;



// Number of Contests Participated: The chart can show the total number of contests the user has participated in over time. This helps track the user's overall contest activity and can indicate their level of commitment to competitive programming.

// Frequency of Contest Participation: The chart can display the frequency of the user's contest participation, showing how often they compete in contests. This can reveal patterns, such as regular participation or sporadic involvement.

// Performance Trends: The chart can include performance indicators such as the user's rating or rank in each contest. By plotting these metrics over time, it becomes possible to observe trends in the user's performance, such as improvement or fluctuations in ratings.

// Contest Types: The chart can differentiate between different contest types, such as regular Codeforces contests, educational rounds, or other special events. This allows users to compare their participation in various contest categories and analyze their performance in each.

// Time-Based Analysis: The chart can show the distribution of contests by day, week, or month. This provides insights into the user's preferred timeframes for participating in contests and can help identify peak periods of activity.

// Comparison with Peers: The chart can include a benchmark line or additional data points to compare the user's contest participation with their peers or top performers. This allows users to see how they stack up against others and set goals for improvement.

// Breakdown by Contest Duration: The chart can categorize contests by their duration, such as short contests, long contests, or combined contests. This helps users understand their preferences for different contest formats and their performance in each.