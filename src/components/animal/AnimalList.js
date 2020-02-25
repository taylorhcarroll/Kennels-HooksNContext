import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
// import "./Animals.css"

export default () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
        {
            animals.map(animal => <Animal key={animal.id} animal={animal} />)
        }
        </div>
    )
}