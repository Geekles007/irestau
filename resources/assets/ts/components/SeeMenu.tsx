import React from 'react';
import Menu from "@/core/models/Menu";

interface MenuProps {
    menu: Menu
}

const SeeMenu = ({menu}: MenuProps) => {
    return (
        <div className="flex w5-12">
            <div className="relative flex items-center">
                <div className="h-24 w-24 border-t-2 border-l-2 border-gray-500 border-dashed rotate-180 rounded-full flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-orange-400 flex justify-center items-center">
                        <img src={"./../images/" + menu.company.logo} className=" h-16 w-16 mr-0" alt="Burger classic"/>
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <span className="text-lg">{menu.name}</span>
                    <a href="/menu" className="mt-1 font-semibold flex items-center see_menu">See the menu <img src="./../icons/005-right-arrow.svg" className="h-4 w-4 ml-2 transition-all duration-500" alt="right arrow"/></a>
                </div>
            </div>
        </div>
    );
}

export default SeeMenu;
