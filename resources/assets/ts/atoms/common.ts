import { atom } from 'recoil';
import ISearch from '@/core/models/ISearch';
import Product from '@/core/models/Product';

export const searchState = atom({
    key: 'search-state',
    default: [] as Array<ISearch>
});

export const cartState = atom({
    key: 'cart-state',
    default: [] as Array<Product>
});

export const dropdownState = atom({
    key: 'dropdown-state',
    default: false
});
