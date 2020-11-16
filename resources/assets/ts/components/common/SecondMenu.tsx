import React, { useState, MouseEvent } from 'react';
import { contactState } from '@/atoms/modal';
import { useRecoilState } from 'recoil';

interface ILink {
    id: number;
    link?: string;
    title: string;
    func?: any;
}

const SecondMenu = () => {
    const [isShown, setIsShown] = useRecoilState(contactState);
    const [links, setLinks] = useState<ILink[]>([
            {
                id: 1,
                title: "About us",
                link: "/",
                func: () => {}
            },
            {
                id: 2,
                title: "Privacy Policy",
                link: "/",
                func: () => {}
            },
            {
                id: 3,
                title: "Legal informations",
                link: "/",
                func: () => {}
            },
            {
                id: 4,
                title: "Contact us",
                link: "",
                func: () => setIsShown(true)
            },
        ]);

    return (
        <>
            <div className="inline-flex flex-wrap gap-x-4">
                {
                    links.map((item: ILink) => {
                        return (
                            item.link === "" ?
                            <a onClick={item.func} className="transition-all duration-300 hover:text-orange-400" key={item.id}>{item.title}</a>
                            : <a href={item.link} className="transition-all duration-300 hover:text-orange-400" key={item.id}>{item.title}</a>
                        );
                    })
                }
            </div>
        </>
    );
}

export default SecondMenu;
