import React, { useContext } from 'react';
import SearchContext from '../Context/SearchContext';
import TypeChart from './TypeChart';
import RatingChart from './RatingChart';
import QuestionsCat from './QuesionsCat';
import RatingChanges from './RatingChanges';
import SubmissionActivity from './SubmissionActivity';

function ExportAll() {
    const { searchValue } = useContext(SearchContext);
    return (
        <div>
            <RatingChanges userName={searchValue} />
            <TypeChart userName={searchValue} />
            <RatingChart userName={searchValue} />
            <QuestionsCat userName={searchValue} />
            <SubmissionActivity userName={searchValue} />
        </div>

    )
}

export default ExportAll




