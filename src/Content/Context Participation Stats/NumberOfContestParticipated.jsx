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



