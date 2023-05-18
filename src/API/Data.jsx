import React, { useEffect, useState } from 'react';
import { ApiService } from './ApiService';

function Data() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const url = 'https://codeforces.com/api/problemset.problems';
            const responseData = await ApiService(url);
            setData(responseData);
            console.log(responseData);
        };

        fetchDataFromAPI();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Aya Kya
        </div>
    );
}

export default Data;
