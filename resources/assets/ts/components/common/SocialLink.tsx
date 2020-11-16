import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import ISocialLink from '@/core/models/ISocialLink';

interface SocialLinkProps {
    data: ISocialLink
}

const SocialLink = ({data}: SocialLinkProps) => {
    return (
        <a href={data.link} className="h-12 w-12 transition-all duration-300 rounded-lg bg-gray-200 flex items-center justify-center text-lg text-gray-500 hover:bg-orange-200">
            {data.icon}
        </a>
    );
}

export default SocialLink;
