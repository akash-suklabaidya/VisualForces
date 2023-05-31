import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchUserInfoData(searchValue) {

    try {
        const userURL = `https://codeforces.com/api/user.info?handles=${searchValue}`;
        const userData = await ApiService(userURL);
        if (userData && userData.status === 'OK') {
            const Info = {};
            Info.searchValue = userData.result[0].searchValue;
            Info.rank = userData.result[0].rank;
            Info.rating = userData.result[0].rating;
            Info.maxRank = userData.result[0].maxRank;
            Info.maxRating = userData.result[0].maxRating;
            Info.titlePhoto = userData.result[0].titlePhoto;
            return Info;
        } else {
            return {};
        }
    }
    catch (error) {
        console.log(error);
    }
}

function UserInfo() {
    const { searchValue } = useContext(SearchContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserInfoData(searchValue);
            setUserInfo(data);
        };

        fetchData();
    }, [searchValue]);

    console.log(userInfo);

    return (
        <div>
            {/* Your JSX component */}

        </div>
    );
}

export { fetchUserInfoData };
export default UserInfo;