import React, { useContext, useEffect } from 'react';
import { ApiService } from '../API/ApiService';
import SearchContext from '../Context/SearchContext';
import toast from "react-hot-toast";

const UsernameForm = () => {
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        validateUsername();
    }, [searchValue]);

    const validateUsername = async () => {
        if (searchValue) {
            const url = `https://codeforces.com/api/user.info?handles=${searchValue}`;
            const response = await ApiService(url);

            if (response && response.status === 'OK') {
                toast.success('Username is valid!');
            } else {
                toast.error('Invalid Username!');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }

        }
    };

    return null;
};

export default UsernameForm;







