import React, {useContext, useEffect} from "react"
import { ProductContext } from "./ProductProvider";
import { Product } from "./Product";
import { ProductTypeContext } from "./ProductTypeProvider";
import { LocationContext } from "../locations/LocationProvider";

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        console.log("Initial render of ProductList before data")
        getProducts()
        getProductTypes()
        getLocations()
    }, [])

    useEffect(() => {
        console.log("Product state changed")
    }, [products])



    return (
        <div className="products">
            <h1>Products</h1>
            {
                products.map(product =>{
                    const type = productTypes.find(type => type.id === product.productTypeId) || {}
                    const location = locations.find(location => location.id === product.locationId) || {}
                    return <Product key={product.id} product={product} type={type} location={location} />
                })
            }
        </div>
    )
}