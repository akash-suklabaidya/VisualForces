import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchMaxRatIncDec(searchValue) {
    try {
        const ratingUrl = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
        const ratingData = await ApiService(ratingUrl);


        if (ratingData && ratingData.status === 'OK') {

            const IncDec = {};

            const ratings = ratingData.result;

            if (ratings.length > 0) {
                let maxInc = 0;
                let maxDec = 0;

                for (let i = 1; i < ratings.length; i++) {
                    const ratingDiff = ratings[i].newRating - ratings[i - 1].newRating;
                    maxInc = Math.max(maxInc, ratingDiff);
                    maxDec = Math.min(maxDec, ratingDiff);
                }
                IncDec.maxIncrease = maxInc;
                IncDec.maxDecrease = maxDec;
                return IncDec;
            }
            else {
                return {};
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function MaxRatingIncrAndDec() {

    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMaxRatIncDec(searchValue);
        };

        fetchData();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
}

export { fetchMaxRatIncDec };
export default MaxRatingIncrAndDec;
