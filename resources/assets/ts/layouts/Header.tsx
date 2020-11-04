import React from "react";

function Header() {
    return (
        <div className=" w-full flex justify-center absolute">
            <header className="w-11/12 mt-8 flex justify-between rounded-full px-2 py-0 shadow-md bg-white items-center">
                <h2 className="ml-2 text-4xl font-semibold">Rest<span className="text-orange-400">.</span></h2>
                <div className="flex">
                    <div className="flex items-center mr-6">
                        <a href="#" className="h-4 w-4"><img className="object-contain object-center" src="./../icons/001-loupe.svg" alt="loupe"/></a>
                    </div>
                    <div className="flex items-center mr-6">
                        <a href="#" className="text-gray-600 transition duration-500 ease-in-out hover:text-orange-600">Why Rest?</a>
                        <a href="#" className="mx-4 transition duration-500 ease-in-out hover:text-orange-600">About</a>
                        <a href="#" className="transition duration-500 ease-in-out hover:text-orange-600">Menu</a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="border border-orange-400 rounded-full px-4 py-2 text-orange-400 text-sm">Sign in</a>
                        <a href="#" className="bg-orange-400 rounded-full px-4 py-2 font-semibold text-sm ml-3">Login</a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
