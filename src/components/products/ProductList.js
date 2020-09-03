import React, {useContext, useEffect} from "react"
import { ProductContext } from "./ProductProvider";
import { Product } from "./Product";

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        console.log("Initial render of ProductList before data")
        getProducts()
    }, [])

    useEffect(() => {
        console.log("Product state changed")
    }, [products])



    return (
        <div className="products">
            {
                products.map(p => <Product key={p.id} product={p} />)
            }
        </div>
    )
}