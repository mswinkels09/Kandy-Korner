import React, {useContext, useEffect} from "react"
import { LocationContext } from "./LocationProvider";

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        console.log("Initial render of LocationList before data")
        getLocations()
    }, [])

    useEffect(() => {
        console.log("Location state changed")
    }, [locations])


    
    return (
        <div className="locations">
            {
                locations.map(location => {
                    return <section key={location.id} className="location">
                        <div><h3>{location.address}</h3></div>
                        <div>Square Feet: {location.sqft}</div>
                        <div>Handicap Accessible:{location.handicap}</div>
                    </section>
                })
            }
        </div>
    )
}