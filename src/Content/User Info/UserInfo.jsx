import React, { useEffect, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchUserInfoData(searchValue) {

    try {
        const userURL = `https://codeforces.com/api/user.info?handles=${searchValue}`;
        const userData = await ApiService(userURL);
        if (userData && userData.status === 'OK') {
            const Info = {};
            Info.rank = userData.result[0].rank;
            Info.rating = userData.result[0].rating;
            Info.maxRank = userData.result[0].maxRank;
            Info.maxRating = userData.result[0].maxRating;
            Info.titlePhoto = userData.result[0].titlePhoto;
            Info.handle = userData.result[0].handle;
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

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserInfoData(searchValue);
        };

        fetchData();
    }, [searchValue]);


    return (
        <div>

        </div>
    );
}

export { fetchUserInfoData };
export default UserInfo;