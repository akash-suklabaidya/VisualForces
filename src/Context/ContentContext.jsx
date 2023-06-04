import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchUserInfoData } from '../Content/User Info/UserInfo';
import { fetchNumberOfContestParticipated } from '../Content/Context Participation Stats/NumberOfContestParticipated';
import { fetchNoOfQuestions } from '../Content/Questions Solved/NoOfQuestions';
import { fetchTypeOfProblemsSolved } from '../Content/Questions Solved/TypeOfProblemsSolved';
import { fetchMaxRatIncDec } from '../Content/Rating Distribution Stats/MaxRatingIncrAndDec';
import { fetchPosAndNegRatPerCon } from '../Content/Rating Distribution Stats/PosAndNegRatPerCon';
import { fetchSubmissisonRate } from '../Content/SubmissionRate/SubmissionPerDay';
import { fetchRatingChanges } from '../Content/Context Participation Stats/RatingChangesPerCon';
import SearchContext from './SearchContext';

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
    const { searchValue } = useContext(SearchContext);

    const [pageData, setPageData] = useState({});

    const fetchUserInfo = async () => {
        try {
            const userInfo = await fetchUserInfoData(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, userInfo }));
            return userInfo;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchNuberOfContests = async () => {
        try {
            const numberOfContests = await fetchNumberOfContestParticipated(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, numberOfContests }));
            return numberOfContests;
        }
        catch (error) {
            console.log(error);
        }
    }

    const fetchQuestionsCount = async () => {
        try {
            const QuestionsCount = await fetchNoOfQuestions(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, QuestionsCount }));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProblemsType = async () => {
        try {
            const Type = await fetchTypeOfProblemsSolved(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, Type }));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchIncDec = async () => {
        try {
            const MaxIncDec = await fetchMaxRatIncDec(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, MaxIncDec }));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPosAndNeg = async () => {
        try {
            const PosAndNeg = await fetchPosAndNegRatPerCon(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, PosAndNeg }));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSubRate = async () => {
        try {
            const subRate = await fetchSubmissisonRate(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, subRate }));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchRating = async () => {
        try {
            const ratChange = await fetchRatingChanges(searchValue);
            setPageData((prevPageData) => ({ ...prevPageData, ratChange }));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserInfo();
        fetchNuberOfContests();
        fetchQuestionsCount();
        fetchProblemsType();
        fetchIncDec();
        fetchPosAndNeg();
        fetchSubRate();
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
