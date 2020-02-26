import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import CustomerList from "./customer/CustomerList"
import EmployeeForm from "./employee/EmployeeForm"
import { ComplexProvider } from "./ComplexProvider"

export default (props) => {
    return (
        <>
        <ComplexProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <LocationList />
            </Route>
                    <Route exact path="/animals">
                        <AnimalList />
                    </Route>
                <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                } />

                <Route path="/employees/create" render={
                    props => <EmployeeForm {...props} />
                } />
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/customers">
                <CustomerList />
            </Route>
        </ComplexProvider>
        </>
    )
}