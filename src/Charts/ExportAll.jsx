import React from 'react';
import SearchContext from '../Context/SearchContext';
import Rough from './Rough';
import TypeChart from './TypeChart';

function ExportAll() {
    return (
        <div>
            <Rough />
            <TypeChart />
        </div>
    )
}

export default ExportAll