import { useState } from "react"

export default function BasicValidation () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            setError("Please fill all the fields😔!")
        } else {
            setError("");                     // if true then it must be empty
            console.log("Form Submitted : ", {name, email});
            alert("Form Submitted Successfully🤩")
            
        }
        
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Basic Form Validation</h2>
                <input 
                type="text" 
                placeholder="Enter Your Name"
                value={name}
                onChange={ (e) => setName(e.target.value) }
                /> <br />

                <input 
                type="email" 
                placeholder="Enter Your Email"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
                /> <br />

                {error && <p style={ {color: "red"} }> {error} </p>}
                {!error && <p style={ {color: "blue"} }> {alert} </p>}

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}