import React, { useEffect, useState } from 'react';
import { ApiService } from '../../API/ApiService';

function PosAndNegRatPerCon({ handle }) {
    const [inArray, setInArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const ratingUrl = `https://codeforces.com/api/user.rating?handle=${handle}`;
            const ratingData = await ApiService(ratingUrl);
            const ratingArray = [];

            if (ratingData && ratingData.status === 'OK') {
                for (let i = 0; i < ratingData.result.length; i++) {

                    let temp = ratingData.result[i].newRating - ratingData.result[i].oldRating;
                    ratingArray.push(temp);
                }
                setInArray(ratingArray);
            }
            else {
                setInArray([]);
            }
        };

        fetchData();
    }, []);

    console.log(inArray);

    return (
        <div>
            Hoga Bhai
        </div>
    );
}

export default PosAndNegRatPerCon;
