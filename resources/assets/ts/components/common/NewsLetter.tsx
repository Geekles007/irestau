import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const NewsLetter = () => {
    return (
        <form className="newsletter flex flex-col">
            <div className="flex mb-2 w-full shadow-lg focus:shadow-xl transition-all duration-300 rounded-full h-12">
                <input type="email" placeholder="Enter your email here ..." className="rounded-full px-4"/>
                <button type="submit" className=" bg-orange-400 text-white sha h-full px-4 flex items-center justify-center rounded-full text-base">Subscribe</button>
            </div>
            <label className="container text-base">I agree to the processing of personal data <a href="#" className="transition-all duration-300 text-orange-400 hover:underline">Terms of privacy</a>
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </form>
    );
}

export default NewsLetter;
