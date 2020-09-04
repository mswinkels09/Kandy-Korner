import React from "react";
import "./Employee.css"

export const Employee = ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.address}</div>
        <address className="employee__salary">${employee.salary}/hour</address>
    </section>
)