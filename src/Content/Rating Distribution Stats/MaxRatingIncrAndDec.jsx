import React, { useEffect, useState } from 'react';
import { ApiService } from '../../API/ApiService';

function MaxRatingIncrAndDec({ handle }) {
    const [maxRatingInc, setMaxRatingInc] = useState(null);
    const [maxRatingDec, setMaxRatingDec] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let maxRating = 0;
            let minRating = 0;
            const ratingUrl = `https://codeforces.com/api/user.rating?handle=${handle}`;
            const ratingData = await ApiService(ratingUrl);

            if (ratingData && ratingData.status === 'OK') {
                for (let i = 0; i < ratingData.result.length; i++) {
                    maxRating = Math.max(maxRating, ratingData.result[i].newRating - ratingData.result[i].oldRating);
                    minRating = Math.min(minRating, ratingData.result[i].newRating - ratingData.result[i].oldRating);
                }
                setMaxRatingInc(maxRating);
                setMaxRatingDec(-minRating);
            } else {
                setMaxRatingInc(0);
                setMaxRatingDec(0);
            }
        };

        fetchData();
    }, []);

    console.log(maxRatingInc);
    console.log(maxRatingDec);

    return (
        <div>
            OK
        </div>
    );
}

export default MaxRatingIncrAndDec;
