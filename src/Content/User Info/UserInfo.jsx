import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

function UserInfo() {
    const { searchValue } = useContext(SearchContext);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const fetchData = async () => {

            const userURL = `https://codeforces.com/api/user.info?searchValues=${searchValue}`;
            const userData = await ApiService(userURL);

            if (userData && userData.status === 'OK') {
                const Info = {};
                Info.searchValue = userData.result[0].searchValue;
                Info.rank = userData.result[0].rank;
                Info.rating = userData.result[0].rating;
                Info.maxRank = userData.result[0].maxRank;
                Info.maxRating = userData.result[0].maxRating;
                Info.titlePhoto = userData.result[0].titlePhoto;
                setUserInfo(Info);

            }
            else {
                setUserInfo({});
            }
        };

        fetchData();
    }, {});

    console.log(userInfo);

    return (
        <div>
            <ul>
                {Object.entries(userInfo).map(([category, data]) => (
                    <li key={category} >
                        Category {category}:{data}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserInfo;
