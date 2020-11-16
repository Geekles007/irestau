import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contactState } from "@/atoms/modal";
import { InertiaLink } from "@inertiajs/inertia-react";
import CartItem from "@/components/common/cart-item";
import Product from "@/core/models/Product";
import Logo from "@/components/common/Logo";

function Header() {

    const [isShown, setIsShown] = useRecoilState(contactState);
    const [cart, setCart] = useState<Product[]>([{
        id: 2,
        name: "Special Crab",
        discountPrice: 8.50,
        price: 10.40,
        image: "crab.png",
        calories: 120
    }]);

    const handleClick = () => {
        setIsShown(true);
    }

    return (
        <div className=" w-full flex justify-center absolute">
            <header className="w-11/12 mt-8 flex justify-between rounded-full pl-4 px-2 py-0 shadow-md bg-white items-center">
                <Logo />
                <div className="inline-flex gap-4 items-center">
                    <div className="flex items-center">
                        <a onClick={handleClick} className="text-gray-600 transition duration-500 ease-in-out hover:text-orange-600">Contact Us</a>
                        <a href="#" className="mx-4 transition duration-500 ease-in-out hover:text-orange-600">About</a>
                        <a href="/menu" className="transition duration-500 ease-in-out hover:text-orange-600">Menu</a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="border border-orange-400 rounded-full px-4 py-2 text-orange-400 text-sm">Sign in</a>
                        <a href="#" className="bg-orange-400 rounded-full px-4 py-2 font-semibold text-sm ml-3">Login</a>
                    </div>
                    <CartItem list={cart}/>
                </div>
            </header>
        </div>
    );
}

export default Header;
