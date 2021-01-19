import React from 'react';

const SearchBox = ( { searchField, searchChange } ) =>
{
    return (
        <div className='pa2'>
            <input className='pa1 ba b--green bg-light-blue' type="search" placeholder="search robos"
                onChange={ searchChange } />
        </div>
    );
}

export default SearchBox;