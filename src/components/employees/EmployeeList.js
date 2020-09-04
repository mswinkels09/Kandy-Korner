import React, {useContext, useEffect} from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import { LocationContext } from "../locations/LocationProvider";

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        console.log("Initial render of PmployeeList before data")
        getEmployees()
        getLocations()
    }, [])

    useEffect(() => {
        console.log("Employee state changed")
    }, [employees])



    return (
        <div className="employees">
            <h1>Employees</h1>
            {
                employees.map(employee =>{
                    const location = locations.find(location => location.id === employee.locationId) || {}
                    return <Employee key={employee.id} employee={employee} location={location} />
                })
            }
        </div>
    )
}