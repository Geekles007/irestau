import React, { useEffect } from 'react';
import SubCategory from '@/core/models/SubCategory';
import { useRecoilState } from 'recoil';
import { dropdownState } from '@/atoms/common';

interface DisplayProps {
    list: SubCategory[],
    id: string
}

const Dropdown = ({list, id} : DisplayProps) => {
    const [isDisplayed, setIsDisplayed] = useRecoilState(dropdownState)

    return (
        <div className={"dropdown overflow-hidden inline-flex flex-col gap-y-3 absolute w-full p-4 rounded-xl mt-16 bg-white shadow-md " + (isDisplayed ? "shown" : "hidden-it")} id={id}>
            <div className={"max-h-200 overflow-y-hidden"}>
                {
                    [1,2,3,4,5,6].map(item => {
                        return (
                            <label htmlFor="item" className="main_checkboxes mb-2 block relative cursor-pointer text-md font-semibold h-10 overflow-hidden pl-2" key={item}>
                                <span className="z-10 absolute leading-10">Item 1</span>
                                <input type="checkbox" className="absolute opacity-0 cursor-pointer z-20 w-full h-full"/>
                                <span className="checkmark absolute bottom-0 left-0 right-0 w-full h-full z-0 rounded-md"></span>
                            </label>
                        );
                    })
                }
            </div>
            <div className="inline-flex gap-x-3">
                <button className="rounded-full w-full px-4 py-2 font-semibold bg-red-200 text-red-400 shadow-md">Cancel</button>
                <button className="rounded-full w-full bg-orange-400 px-4 py-2 text-white font-semibold shadow-md">Save</button>
            </div>
        </div>
    );
}

export default Dropdown;
