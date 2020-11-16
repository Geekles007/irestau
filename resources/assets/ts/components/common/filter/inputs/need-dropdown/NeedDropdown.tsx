import React, { useState, useEffect } from 'react';

import { FaList } from 'react-icons/fa';
import Dropdown from './Dropdown';
import { useRecoilState } from 'recoil';
import { dropdownState } from '@/atoms/common';

const NeedDropdown = () => {
    const [subCategores, SetSubCategories] = useState([]);
    const [shown, setShown] = useRecoilState(dropdownState);

    useEffect(() => {
        window.addEventListener('click', function(e: any){
            const el: any = document.getElementById('dropdown-button');
            const elt: any = document.getElementById('dropdown-list');
            if (el.contains(e.target) || elt.contains(e.target)){
                setShown(true);
            } else {
                setShown(false);
            }
        });
    }, []);

    return (
        <div className="relative w-2/6 flex flex-col z-20">
            <a className={"dropdown_button inline-flex gap-3 items-center justify-center h-12 w-1/2 px-4 rounded-full bg-white shadow hover:shadow-xl transition-all duration-500 hover:bg-orange-200 " + (shown ? "button_activated" : "")} onClick={() => setShown(!shown)} id="dropdown-button">
                <FaList />
                {/* <span className="rounded-full h-6 w-6 bg-gray-800 text-xs text-center flex items-center justify-center text-white font-semibold">10</span> */}
                <span className="font-semibold text-base tracking-wide"> Filter </span>
            </a>
            <Dropdown id="dropdown-list" list={[]} />
        </div>
    );
}

export default NeedDropdown;
