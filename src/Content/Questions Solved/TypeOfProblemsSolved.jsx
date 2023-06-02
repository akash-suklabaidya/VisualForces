// import React, { useEffect, useState, useContext } from 'react';
// import { ApiService } from '../../API/ApiService';
// import SearchContext from '../../Context/SearchContext';

// async function fetchTypeOfProblemsSolved(searchValue) {
//     try {
//         const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
//         const data = await ApiService(url);
//         if (data && data.status === 'OK') {
//             const submissions = data.result;
//             const solvedProblemsSet = new Set();
//             const solvedCategoriesCount = {};
//             const solvedRatingsCount = {};
//             const solvedTagsCount = {};
//             const prob = {};

//             submissions.forEach((submission) => {
//                 if (submission.verdict === 'OK') {
//                     const problem = submission.problem;
//                     const problemIndex = problem.index;
//                     const problemCategory = problem.index.charAt(0);
//                     const problemSubCategory = problem.index.substring(1);

//                     solvedProblemsSet.add(problemIndex);

//                     if (problemCategory in solvedCategoriesCount) {
//                         solvedCategoriesCount[problemCategory]++;
//                     } else {
//                         solvedCategoriesCount[problemCategory] = 1;
//                     }

//                     const categorySubKey = `${problemCategory}${problemSubCategory}`;
//                     if (categorySubKey in solvedCategoriesCount) {
//                         solvedCategoriesCount[categorySubKey]++;
//                     } else {
//                         solvedCategoriesCount[categorySubKey] = 1;
//                     }

//                     const problemRating = problem.rating;
//                     if (problemRating in solvedRatingsCount) {
//                         solvedRatingsCount[problemRating]++;
//                     } else {
//                         solvedRatingsCount[problemRating] = 1;
//                     }

//                     const problemTags = problem.tags;
//                     problemTags.forEach((tag) => {
//                         if (tag in solvedTagsCount) {
//                             solvedTagsCount[tag]++;
//                         } else {
//                             solvedTagsCount[tag] = 1;
//                         }
//                     });
//                 }
//             });

//             prob.solvedProblems = Array.from(solvedProblemsSet);
//             prob.solvedCategories = solvedCategoriesCount;
//             prob.solvedRatings = solvedRatingsCount;
//             prob.solvedTags = solvedTagsCount;

//             return prob;
//         } else {
//             return {};
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function TypeOfProblemsSolved() {

//     const { searchValue } = useContext(SearchContext);

//     useEffect(() => {
//         const fetchUserSolvedProblems = async () => {
//             const data = await fetchTypeOfProblemsSolved(searchValue);
//         }
//         fetchUserSolvedProblems();
//     }, [searchValue]);

//     return (
//         <div>

//         </div>
//     );
// };


// export { fetchTypeOfProblemsSolved };
// export default TypeOfProblemsSolved;



// import React, { useEffect, useState, useContext } from 'react';
// import { ApiService } from '../../API/ApiService';
// import SearchContext from '../../Context/SearchContext';

// const TypeOfProblemsSolved = () => {

//     const { searchValue } = useContext(SearchContext);

//     const [solvedProblems, setSolvedProblems] = useState([]);
//     const [solvedCategories, setSolvedCategories] = useState({});
//     const [solvedRatings, setSolvedRatings] = useState({});
//     const [solvedTags, setSolvedTags] = useState({});

//     useEffect(() => {
//         const fetchUserSolvedProblems = async () => {
//             try {
//                 const url = `https://codeforces.com/api/user.status?handle=${searchValue}`;
//                 const data = await ApiService(url);

//                 if (data && data.status === 'OK') {
//                     const submissions = data.result;
//                     const solvedProblemsSet = new Set();
//                     const solvedCategoriesCount = {};
//                     const solvedRatingsCount = {};
//                     const solvedTagsCount = {};

//                     submissions.forEach((submission) => {
//                         if (submission.verdict === 'OK') {
//                             const problem = submission.problem;
//                             const problemIndex = problem.index;
//                             const problemCategory = problem.index.charAt(0);
//                             const problemRating = problem.rating;
//                             const problemTags = problem.tags;

//                             solvedProblemsSet.add(problemIndex);

//                             if (problemCategory in solvedCategoriesCount) {
//                                 solvedCategoriesCount[problemCategory]++;
//                             } else {
//                                 solvedCategoriesCount[problemCategory] = 1;
//                             }

//                             if (problemRating in solvedRatingsCount) {
//                                 solvedRatingsCount[problemRating]++;
//                             } else {
//                                 solvedRatingsCount[problemRating] = 1;
//                             }

//                             problemTags.forEach((tag) => {
//                                 if (tag in solvedTagsCount) {
//                                     solvedTagsCount[tag]++;
//                                 } else {
//                                     solvedTagsCount[tag] = 1;
//                                 }
//                             });
//                         }
//                     });

//                     setSolvedProblems(Array.from(solvedProblemsSet));
//                     setSolvedCategories(solvedCategoriesCount);
//                     setSolvedRatings(solvedRatingsCount);
//                     setSolvedTags(solvedTagsCount);
//                 } else {
//                     console.log('Error: Unable to fetch user submissions');
//                 }
//             } catch (error) {
//                 console.log('Error:', error.message);
//             }
//         };

//         fetchUserSolvedProblems();
//     }, [searchValue]);

//     return (
//         <div>
//             <h1>Solved Problems</h1>
//             {solvedProblems.length > 0 ? (
//                 <div>
//                     <h2>Problem Indices:</h2>
//                     <ul>
//                         {solvedProblems.map((problemIndex) => (
//                             <li key={problemIndex}>{problemIndex}</li>
//                         ))}
//                     </ul>
//                     <h2>Category Counts:</h2>
//                     <ul>
//                         {Object.entries(solvedCategories).map(([category, count]) => (
//                             <li key={category}>
//                                 Category {category}: {count} problem(s)
//                             </li>
//                         ))}
//                     </ul>
//                     <h2>Rating Counts:</h2>
//                     <ul>
//                         {Object.entries(solvedRatings).map(([rating, count]) => (
//                             <li key={rating}>
//                                 Rating {rating}: {count} problem(s)
//                             </li>
//                         ))}
//                     </ul>
//                     <h2>Tag Counts:</h2>
//                     <ul>
//                         {Object.entries(solvedTags).map(([tag, count]) => (
//                             <li key={tag}>
//                                 Tag {tag}: {count} problem(s)
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>No solved problems found.</p>
//             )}
//         </div>
//     );
// };




// export default TypeOfProblemsSolved;


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