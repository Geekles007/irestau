import React, { useState } from 'react';
import AutoComplete from './AutoComplete';
import Product from '@/core/models/Product';
import ISearch from '@/core/models/ISearch';

const SearchInput = () => {
    const [results, setResults] = useState<ISearch[]>([]);

    return (
        <div className="flex flex-col relative w-4/6">
            <div className="inline-flex gap-3 px-3 w-full bg-white shadow-md rounded-full overflow-hidden h-12 items-center">
                <img src="./../icons/001-loupe.svg" className=" w-5" alt="search"/>
                <input type="text" placeholder="Name, Place, Foods ..." className="h-full w-11/12 px-4 text-orange-400"/>
            </div>
            {
                results.length > 0 ? <AutoComplete results={results} /> : ""
            }
        </div>
    );
}

export default SearchInput;
