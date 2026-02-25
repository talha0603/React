import { useState } from "react"

export default function InputExample () {

    const [name, SetName] = useState ("")
    return (
        <div>
            <input type="text" name="text" value={name} onChange={ (e) => SetName(e.target.value) } /> 
            <p>Hello, {name || "Guest"}</p>
        </div>
    )
}