import { Products } from "../interfaces/interfaces";

const getProducts = async (): Promise<Products[]> => {
    const res = await fetch('/products/products.json');
    return await res.json();
}

export { getProducts }