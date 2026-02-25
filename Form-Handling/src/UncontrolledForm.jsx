import { useRef } from "react"

// useRef does not refresh whole component like useState
export default function UncontrolledForm () {

    const name = useRef();                       // can set default value
    const email = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name: ", name.current.value);
        console.log("Email: ", email.current.value);
        
        
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Uncontrolled Form</h2>
                <input 
                type="text" 
                placeholder="Name"
                ref={name}
                /> <br />

                <input 
                type="email" 
                placeholder="Email"
                ref={email}
                /> <br />

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}