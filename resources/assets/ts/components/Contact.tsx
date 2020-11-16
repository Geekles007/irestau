import React from 'react';
import { useRecoilState } from 'recoil';
import { contactState } from '@/atoms/modal';

const Contact = () => {

    const [isShown, setIsShown] = useRecoilState(contactState);

    return (
        <div className={"__contact invisible opacity-0 flex fixed top-0 bottom-0 left-0 right-0 w-full h-full z-30 items-center " + (isShown ? "__visible" : "")}>
            <div onClick={() => setIsShown(false)} className="__blur opacity-75 fixed z-0 top-0 bottom-0 left-0 right-0 bg-black"></div>
            <div className="__contact_content flex flex-col absolute overflow-hidden rounded-lg bg-white h-full-80 w-400 left-0 ml-8">
                <div className="w-full h-32 relative flex justify-center">
                    <div className="w-full bg-gray-800 h-24"></div>
                    <div className="rounded-full h-16 w-16 bg-orange-400 flex items-center justify-center absolute -m-1 bottom-0"><strong className="text-5xl font-bold">R</strong></div>
                </div>
                <div className="p-4">
                    <form className="w-full mb-8">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Email" className="w-full focus:border-orange-400 px-3 text-sm h-10 border border-gray-800 mb-1 rounded-md"/>
                            <span className=" text-red-700 text-sm">Wrong email format</span>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email">Message</label>
                            <textarea rows={4} placeholder="Message" className="w-full focus:border-orange-400 text-sm p-3 border border-gray-800 mb-1 rounded-md"/>
                            <span className=" text-red-700 text-sm"></span>
                        </div>
                        <button className="rounded-md px-10 py-2 hover:bg-orange-500 transition-all duration-500 bg-orange-400 text-white" type="submit">Send</button>
                    </form>
                    <div className="flex flex-col">
                        <strong className="font-semibold">+7 996 310 20 39</strong>
                        <strong className="font-semibold">+7 996 310 20 39</strong>
                    </div>
                </div>
                <img src="./../images/pizza.png" className="absolute w-48 h-48 bottom-0 right-0 -mr-20 -mb-20" alt="pizza"/>
            </div>
        </div>
    );
}

export default Contact;
