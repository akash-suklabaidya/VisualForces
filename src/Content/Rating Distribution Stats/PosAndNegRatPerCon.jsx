import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchPosAndNegRatPerCon(searchValue) {
    try {
        const ratingUrl = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
        const ratingData = await ApiService(ratingUrl);

        if (ratingData && ratingData.status === 'OK') {
            const changes = ratingData.result.reduce((obj, change) => {
                const ratChange = change.newRating - change.oldRating;
                return {
                    ...obj,
                    [change.contestId]: {
                        contestName: change.contestName,
                        ratingChange: ratChange,
                    },
                };
            }, {});
            return changes;
        } else {
            return {};
        }
    } catch (error) {
        console.log(error);
    }
}

function PosAndNegRatPerCon() {
    const { searchValue } = useContext(SearchContext);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPosAndNegRatPerCon(searchValue);
        };

        fetchData();
    }, [searchValue]);


    return (
        <div>

        </div>
    );
}


export { fetchPosAndNegRatPerCon };
export default PosAndNegRatPerCon;

