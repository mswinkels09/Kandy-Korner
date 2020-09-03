import React, {useContext, useEffect} from "react"
import { LocationContext } from "./LocationProvider";
import { Location } from "./Location";

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
                locations.map(l => <Location key={l.id} location={l} />)
            }
        </div>
    )
}