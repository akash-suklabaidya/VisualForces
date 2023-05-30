// import React, { useEffect, useState, useContext } from 'react';
// import { ApiService } from '../../API/ApiService';
// import SearchContext from '../../Context/SearchContext';

// function UserInfo() {
//     const { searchValue } = useContext(SearchContext);
//     const [userInfo, setUserInfo] = useState({});
//     useEffect(() => {
//         const fetchData = async () => {

//             const userURL = `https://codeforces.com/api/user.info?handles=${searchValue}`;
//             const userData = await ApiService(userURL);

//             if (userData && userData.status === 'OK') {
//                 const Info = {};
//                 Info.searchValue = userData.result[0].searchValue;
//                 Info.rank = userData.result[0].rank;
//                 Info.rating = userData.result[0].rating;
//                 Info.maxRank = userData.result[0].maxRank;
//                 Info.maxRating = userData.result[0].maxRating;
//                 Info.titlePhoto = userData.result[0].titlePhoto;
//                 setUserInfo(Info);
//             }
//             else {
//                 setUserInfo({});
//             }
//         };

//         fetchData();
//     }, [searchValue]);

//     console.log(userInfo);

//     return (
//         <div>

//         </div>
//     );
// }

// export default UserInfo;

import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

export let userInfoData = {}; // Declare a named variable to store the userInfo data

export const UserInfo = () => {
    const { searchValue } = useContext(SearchContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const userURL = `https://codeforces.com/api/user.info?handles=${searchValue}`;
            const userData = await ApiService(userURL);

            if (userData && userData.status === 'OK') {
                const info = {
                    searchValue: userData.result[0].searchValue,
                    rank: userData.result[0].rank,
                    rating: userData.result[0].rating,
                    maxRank: userData.result[0].maxRank,
                    maxRating: userData.result[0].maxRating,
                    titlePhoto: userData.result[0].titlePhoto,
                };
                setUserInfo(info);
                userInfoData = info; // Assign the userInfo data to the exported variable
            } else {
                setUserInfo({});
                userInfoData = {}; // Reset the userInfo data in case of error
            }
        };

        fetchData();
    }, [searchValue]);
}