import Product from "./Product";

interface Company {
    id: number;
    name: string;
    logo?: string;
    cover?: string;
    closedAt?: string;
    rate?: number;
    description?: string;
    deliveryTime?: string;
    isClosed?: boolean;

    // products?: Product[]
}

export default Company;
