import React, { useContext } from 'react';
import SearchContext from '../Context/SearchContext';
import Rough from './Rough';
import TypeChart from './TypeChart';
import RatingChart from './RatingChart';
import QuestionsCat from './QuesionsCat';
import RatingChanges from './RatingChanges';
import SubmissionActivity from './SubmissionActivity';

function ExportAll() {
    const { searchValue } = useContext(SearchContext);
    console.log(searchValue);
    return (
        <div>
            {/* <Rough /> */}
            <SubmissionActivity userName={searchValue} />
            {/* <RatingChanges userName={searchValue} />
            <TypeChart userName={searchValue} />
            <RatingChart userName={searchValue} />
            <QuestionsCat userName={searchValue} /> */}
        </div>
    )
}

export default ExportAll