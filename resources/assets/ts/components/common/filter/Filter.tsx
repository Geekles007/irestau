import React from 'react';
import SearchInput from './inputs/search-input/SearchInput';
import NeedDropdown from './inputs/need-dropdown/NeedDropdown';

const Filter = () => {
    return (
        <>
            <div className=" inline-flex items-center gap-4 w-10/12">
                <SearchInput />
                <NeedDropdown />
            </div>
        </>
    );
}

export default Filter;
