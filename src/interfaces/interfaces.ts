export interface Products {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    price: number,
    estate: {
        bathrooms: number,
        bedrooms: number,
        area: number,
    }
    features: string[],
    extras: string[],
    images: {
        miniature?: {
            alt: string,
            src: string,
        }
        details: string[],
        map?: {
            src: string,
            alt: string,
        }
    }
}

export interface PropsAllProducts{
    products: Products[]
}

export interface PropsOneProduct {
    product: Products
  }