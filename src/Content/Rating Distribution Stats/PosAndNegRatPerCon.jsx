// import React, { useEffect, useState, useContext } from 'react';
// import { ApiService } from '../../API/ApiService';
// import SearchContext from '../../Context/SearchContext';

// async function fetchPosAndNegRatPerCon(searchValue) {
//     try {
//         const ratingUrl = `https://codeforces.com/api/user.rating?handle=${searchValue}`;
//         const ratingData = await ApiService(ratingUrl);


//         if (ratingData && ratingData.status === 'OK') {
//             const ans = {};

//             const ratChange = ratingData.result.newRating - ratingData.result.oldRating;

//             ans.ratingChange = ratChange;

//             return ans;

//         } else {
//             return {};
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function PosAndNegRatPerCon() {
//     const { searchValue } = useContext(SearchContext);


//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchPosAndNegRatPerCon(searchValue);
//         };

//         fetchData();
//     }, [searchValue]);


//     return (
//         <div>

//         </div>
//     );
// }


// export { fetchPosAndNegRatPerCon };
// export default PosAndNegRatPerCon;


import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

function PosAndNegRatPerCon() {
    const { searchValue } = useContext(SearchContext);

    const [ratingChanges, setRatingChanges] = useState({});

    useEffect(() => {
        const fetchData = async () => {
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
                    setRatingChanges(changes);
                } else {
                    setRatingChanges({});
                }
            } catch (error) {
                console.error(error);
                setRatingChanges({});
            }
        };

        fetchData();
    }, [searchValue]);

    console.log(ratingChanges);

    return (
        <div>
            {Object.keys(ratingChanges).map((contestId) => (
                <div key={contestId}>
                    <p>Contest Name: {ratingChanges[contestId].contestName}</p>
                    <p>Rating Change: {ratingChanges[contestId].ratingChange}</p>
                </div>
            ))}
        </div>
    );
}

export default PosAndNegRatPerCon;
