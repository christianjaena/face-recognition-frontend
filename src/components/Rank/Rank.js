import React from 'react';


const Rank = ({ name, entries }) => {
    return(
        <div>
            <p className='center f3 white pa0 ma0'>
                {`${name}, your current entry count is ...`}
            </p>
            <p className='center f2 white pa0 ma0'>
                {entries}
            </p>
        </div>
    )
}

export default Rank;