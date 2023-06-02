import React from 'react';
import SearchContext from '../Context/SearchContext';
import Rough from './Rough';
import TypeChart from './TypeChart';
import RatingChart from './RatingChart';
import QuestionsCat from './QuesionsCat';

function ExportAll() {
    return (
        <div>
            <Rough />
            <TypeChart />
            <RatingChart />
            <QuestionsCat />
        </div>
    )
}

export default ExportAll