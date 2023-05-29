import React, { useEffect, useState, useContext } from 'react';
// import { ApiService } from './path/to/ApiService';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

function MaxRatingIncrAndDec() {

    const { searchValue } = useContext(SearchContext);

    const [maxIncrease, setMaxIncrease] = useState(0);
    const [maxDecrease, setMaxDecrease] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ratingUrl = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
                const ratingData = await ApiService(ratingUrl);

                if (ratingData && ratingData.status === 'OK') {
                    const ratings = ratingData.result;

                    if (ratings.length > 0) {
                        let maxInc = 0;
                        let maxDec = 0;

                        for (let i = 1; i < ratings.length; i++) {
                            const ratingDiff = ratings[i].newRating - ratings[i - 1].newRating;
                            maxInc = Math.max(maxInc, ratingDiff);
                            maxDec = Math.min(maxDec, ratingDiff);
                        }

                        setMaxIncrease(maxInc);
                        setMaxDecrease(-maxDec);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [searchValue]);

    return (
        <div>
            <h1>Max Rating Increase: {maxIncrease}</h1>
            <h1>Max Rating Decrease: {maxDecrease}</h1>
        </div>
    );
}

export default MaxRatingIncrAndDec;
