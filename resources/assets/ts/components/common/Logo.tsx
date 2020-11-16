import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Logo = () => {
    return (
        <InertiaLink href="/" className="text-4xl font-semibold">Rest<span className="text-orange-400">.</span></InertiaLink>
    );
}

export default Logo;
