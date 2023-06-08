import React, { useContext } from 'react';
import SearchContext from '../Context/SearchContext';
import Rough from './Rough';
import TypeChart from './TypeChart';
import RatingChart from './RatingChart';
import QuestionsCat from './QuesionsCat';
import RatingChanges from './RatingChanges';
import SubmissionActivity from './SubmissionActivity';
import QuestionPerConChart from './QuestionPerConChart';

function ExportAll() {
    const { searchValue } = useContext(SearchContext);
    return (
        <div>
            <QuestionPerConChart />
            {/* <RatingChanges userName={searchValue} />
            <TypeChart userName={searchValue} />
            <RatingChart userName={searchValue} />
            <QuestionsCat userName={searchValue} />
            <SubmissionActivity userName={searchValue} /> */}

        </div>

    )
}

export default ExportAll




