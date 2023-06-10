import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchRatingChanges(searchValue) {
    try {
        const url = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
        const data = await ApiService(url);
        if (data && data.status === 'OK') {
            const ratingChanges = data.result.map((contest) => {
                return {
                    contestName: contest.contestName,
                    ratingChange: contest.newRating - contest.oldRating
                };
            });

            return ratingChanges;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

function RatingChangesPerCon() {
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRatingChanges(searchValue);
        };

        fetchData();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
}

export { fetchRatingChanges };
export default RatingChangesPerCon;
