import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchUserInfoData } from '../Content/User Info/UserInfo';
import { fetchTypeOfProblemsSolved } from '../Content/Questions Solved/TypeOfProblemsSolved';
import { fetchMaxRatIncDec } from '../Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import { fetchPosAndNegRatPerCon } from '../Content/Rating Distribution Stats/PosAndNegRatPerCon';
import { fetchRatingChanges } from '../Content/Context Participation Stats/RatingChangesPerCon';
import { fetchSubmissionActivity } from '../Content/Context Participation Stats/QuestionsSolvedPerContest';
import SearchContext from './SearchContext';

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
    const { searchValue } = useContext(SearchContext);

    const [pageData, setPageData] = useState({});

    const delay = 2000; // Delay in milliseconds


    const fetchUserInfo = async () => {
        try {
            setTimeout(async () => {
                const userInfo = await fetchUserInfoData(searchValue);
                setPageData((prevPageData) => ({ ...prevPageData, userInfo }));
            }, delay);
        } catch (error) {
            console.log(error);
        }
    };


    const fetchProblemsType = async () => {
        try {
            setTimeout(async () => {
                const Type = await fetchTypeOfProblemsSolved(searchValue);
                setPageData((prevPageData) => ({ ...prevPageData, Type }));
            }, delay * 2);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProbPerContest = async () => {
        try {
            setTimeout(async () => {
                const prob = await fetchSubmissionActivity(searchValue);
                setPageData((prevPageData) => ({ ...prevPageData, prob }));
            }, delay * 3);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchIncDec = async () => {
        try {
            setTimeout(async () => {
                const MaxIncDec = await fetchMaxRatIncDec(searchValue);
                setPageData((prevPageData) => ({ ...prevPageData, MaxIncDec }));
            }, delay * 4);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPosAndNeg = async () => {
        try {
            setTimeout(async () => {
                const PosAndNeg = await fetchPosAndNegRatPerCon(searchValue);
                setPageData((prevPageData) => ({ ...prevPageData, PosAndNeg }));
            }, delay * 5);
        } catch (error) {
            console.log(error);
        }
    };


    const fetchRating = async () => {
        try {
            setTimeout(async () => {
                const ratChange = await fetchRatingChanges(searchValue);
                setPageData((prevPageData) => ({ ...prevPageData, ratChange }));
            }, delay * 6);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
        fetchProblemsType();
        fetchProbPerContest();
        fetchIncDec();
        fetchPosAndNeg();
        fetchRating();
    }, [searchValue]);

    return (
        <ContentContext.Provider value={{
            pageData,
            setPageData,
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;
export { ContentContext };
