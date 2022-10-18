import { createContext, useEffect, useState } from "react";
import { Products } from "../interfaces/interfaces";
import { getProducts } from "../services/getProducts";

interface ProductProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface ProductContextType {
    products: Products[]
}


const ProductContext = createContext<ProductContextType>({} as ProductContextType);

const ProductProvider = ({children}: ProductProviderProps) => {

    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        const callGetProducts = async () => {
            setProducts(await getProducts())
        }

        callGetProducts();
    }, []);

    return (
        <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
    )
}


export { ProductContext }
export default ProductProvider