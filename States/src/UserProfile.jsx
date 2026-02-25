import { useState } from "react"

export default function UserProfile () {

    const [userName, SetName] = useState ("Guest")
    const [userAge, SetAge] = useState (20)

    return (
        <div>
            <p>Name: {userName}</p>
            <p>Age: {userAge}</p>
            <button onClick={ () => SetName ("Talha Makhdoom") }>Original Name</button>
            <button onClick={ () => SetAge (23) }>Original Age</button>
        </div>
    )
}