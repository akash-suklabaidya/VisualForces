import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

function PosAndNegRatPerCon() {
    const { searchValue } = useContext(SearchContext);

    const [ratingChanges, setRatingChanges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ratingUrl = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
                const ratingData = await ApiService(ratingUrl);

                if (ratingData && ratingData.status === 'OK') {
                    setRatingChanges(ratingData.result);
                } else {
                    setRatingChanges([]);
                }
            } catch (error) {
                console.error(error);
                setRatingChanges([]);
            }
        };

        fetchData();
    }, [searchValue]);

    console.log(ratingChanges);

    return (
        <div>
            {
                ratingChanges.map((change, index) => (
                    <div key={index}>
                        <p>Contest Name: {change.contestName}</p>
                        <p>Rating Change: {change.newRating - change.oldRating}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default PosAndNegRatPerCon;
