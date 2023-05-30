import React, { createContext, useState, useContext, useEffect } from 'react';
// import { fetchUserInfoData } from '../Content/UserInfo';
import { fetchUserInfoData } from '../Content/User Info/UserInfo';
import SearchContext from './SearchContext';

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
    const { searchValue } = useContext(SearchContext);

    const [pageData, setPageData] = useState({});

    const fetchUserInfo = async () => {
        try {
            const userInfo = await fetchUserInfoData(searchValue);
            setPageData(userInfo);
            return userInfo;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, [searchValue]);

    return (
        <ContentContext.Provider value={{ getUserInfo: pageData, setPageData }}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;
export { ContentContext };


// import React, { useEffect, useContext, useState } from 'react';
// import { fetchUserInfoData } from '../Content/User Info/UserInfo';
// import SearchContext from './SearchContext';

// function ContentContext() {
//     const { searchValue } = useContext(SearchContext);
//     const [data, setData] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             const userInfo = await fetchUserInfoData(searchValue);
//             // console.log(userInfo);
//             setData(userInfo);
//         };

//         // fetchData();
//     }, [searchValue]);
//     console.log(data);


//     return (
//         <div>
//             {/* Your JSX component */}
//         </div>
//     );
// }

// export default ContentContext;
