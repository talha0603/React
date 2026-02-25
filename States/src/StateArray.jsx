import { useState } from "react"

function StateArray () {

    const [data, SetData] = useState ({
        name: "Ghazab Bhai",
        age: "25",
        city: "Lahore",
        address: "Gulberg City, Lahore"
    })

    // this way you can change the values in State
    const changing = () => {
        SetData ({...data, city : "Islamabad", age : "30"})
    }
    return (
        <div>
            <p>Name : {data.name}</p>
            <p>Age : {data.age}</p>
            <p>City : {data.city}</p>
            <p>Address : {data.address}</p>
            <button onClick={changing}>Changing</button>
        </div>
    )
}
export default StateArray