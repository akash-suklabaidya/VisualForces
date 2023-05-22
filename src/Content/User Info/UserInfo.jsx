import React, { useEffect, useState } from 'react';
import { ApiService } from '../../API/ApiService';

function UserInfo({ handle }) {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const fetchData = async () => {

            const userURL = `https://codeforces.com/api/user.info?handles=${handle}`;
            const userData = await ApiService(userURL);

            if (userData && userData.status === 'OK') {
                const Info = {};
                Info.handle = userData.result[0].handle;
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
