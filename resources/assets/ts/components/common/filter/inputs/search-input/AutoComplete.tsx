import React from 'react';
import ISearch from '@/core/models/ISearch';

interface ResultsProps {
    results: ISearch[]
}

const AutoComplete = ({results}: ResultsProps) => {
    return (
        <>
            <div className="absolute w-full p-2 rounded-xl mt-16 bg-white shadow-md inline-flex flex-col gap-y-2 max-h-250">
                {
                    results.map((item: ISearch) => {
                        return (
                            <a href="#" className="inline-flex items-center gap-4 w-full p-3 bg-gray-200 transition-all duration-500 hover:bg-gray-800 rounded-xl hover:text-white">
                                {
                                    item.image === "" ? "" : <img src={"./../images/" + item.image} className="h-8" alt="burger"/>
                                }
                                <strong className="font-semibold">{item.name}</strong>
                            </a>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AutoComplete;


