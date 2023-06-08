import React, { useEffect, useState, useContext } from 'react';
import { ApiService } from '../../API/ApiService';
import SearchContext from '../../Context/SearchContext';

async function fetchTypeOfProblemsSolved(searchValue) {
    try {
        const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
        const data = await ApiService(url);
        if (data && data.status === 'OK') {
            const submissions = data.result;
            const solvedProblemsSet = new Set();
            const solvedCategoriesCount = {};
            const solvedRatingsCount = {};
            const solvedTagsCount = {};
            const prob = {};

            submissions.forEach((submission) => {

                if (submission.verdict === 'OK') {


                    const problem = submission.problem;
                    const problemIndex = problem.index;
                    const problemCategory = problem.index.charAt(0);
                    const problemRating = problem.rating;
                    const problemTags = problem.tags;

                    solvedProblemsSet.add(problemIndex);

                    if (problemCategory in solvedCategoriesCount) {
                        solvedCategoriesCount[problemCategory]++;
                    } else {
                        solvedCategoriesCount[problemCategory] = 1;
                    }

                    if (problemRating in solvedRatingsCount) {
                        solvedRatingsCount[problemRating]++;
                    } else {
                        solvedRatingsCount[problemRating] = 1;
                    }
                    problemTags.forEach((tag) => {
                        if (tag in solvedTagsCount) {
                            solvedTagsCount[tag]++;
                        } else {
                            solvedTagsCount[tag] = 1;
                        }
                    });
                }
            });
            prob.solvedProblems = Array.from(solvedProblemsSet);
            prob.solvedCategories = solvedCategoriesCount;
            prob.solvedRatings = solvedRatingsCount;
            prob.solvedTags = solvedTagsCount;

            return prob;

        }
        else {
            return {};
        }
    }
    catch (error) {
        console.log(error);
    }
}

function TypeOfProblemsSolved() {

    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchUserSolvedProblems = async () => {
            const data = await fetchTypeOfProblemsSolved(searchValue);
        }
        fetchUserSolvedProblems();
    }, [searchValue]);

    return (
        <div>

        </div>
    );
};


export { fetchTypeOfProblemsSolved };
export default TypeOfProblemsSolved;


