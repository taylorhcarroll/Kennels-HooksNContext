import React from "react"
// import "./Locations.css"

export default ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <location className="customer__location">{customer.address}</location>
    </section>
)