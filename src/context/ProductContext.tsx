import { createContext, useEffect, useState } from "react";
import { Products } from "../interfaces/interfaces";
import { getProducts } from "../services/getProducts";

interface ProductProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface ProductContextType {
    products: Products[]
    loading: boolean
}


const ProductContext = createContext<ProductContextType>({} as ProductContextType);

const ProductProvider = ({children}: ProductProviderProps) => {
    
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        const callGetProducts = async () => {
            setLoading(true)
            setProducts(await getProducts())
            setLoading(false)
        }

        callGetProducts();
    }, []);

    return (
        <ProductContext.Provider value={{products, loading}}>{children}</ProductContext.Provider>
    )
}


export { ProductContext }
export default ProductProvider