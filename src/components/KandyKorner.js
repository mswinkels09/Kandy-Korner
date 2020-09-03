import React from "react";

import { Location } from "./locations/Location";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";

export const KandyKorner = () => (
    <>
        <h1 className="header">Kandy Korner</h1>

        <h2 className="location-header">Store Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
    </>
)