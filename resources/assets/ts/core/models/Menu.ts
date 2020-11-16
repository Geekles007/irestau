import Product from "./Product";
import Company from "./Company";

interface Menu {
    id: number;
    name?: string;
    products: Product[],
    company: Company
}


export default Menu;
