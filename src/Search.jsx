import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"
// Main Style
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People'
import { useHistory } from 'react-router-dom';


// Date Picker Component
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    // how come no model to store classes?
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    // and why are there no routes in these builds?


    // what does key:selection do? how come its used as a prop? how are they passing in ranges...from where?
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            {/* These aren't switch routes are they? are they classes? */}
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of Guests
                <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>


        </div>
    );
}

// there are no routes. even in app.js, are thery built-in routes from the imports?

export default Search;
