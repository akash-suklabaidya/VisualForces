import React, { useContext, useEffect } from 'react';
import { ApiService } from '../API/ApiService';
import SearchContext from '../Context/SearchContext';
import { ContentContext } from '../Context/ContentContext';
import toast from "react-hot-toast";

const UsernameForm = () => {
    const { searchValue } = useContext(SearchContext);
    const { pageData } = useContext(ContentContext);


    useEffect(() => {
        validateUsername();
    }, [searchValue]);

    const validateUsername = async () => {

        if (searchValue) {
            const url = `https://codeforces.com/api/user.info?handles=${searchValue}`;
            const response = await ApiService(url);
            console.log(response);

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




