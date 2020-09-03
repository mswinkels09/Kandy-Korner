import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList";
import { ProductProvider } from "./products/ProductProvider";

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
            )
}