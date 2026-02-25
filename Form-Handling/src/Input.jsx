import { useState } from "react"


export default function InputForm (){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <h2>React Form Example</h2>

            <label>Name: </label>
            <input 
            type="text" 
            value={name}
            onChange={ (e) => setName(e.target.value) } 
            />
            <br />

            <label>Email: </label>
            <input 
            type="email" 
            value={email}
            onChange={ (e) => setEmail(e.target.value) } 
            />
            <br />

            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}



// export default function InputForm () {

//     const [name, SetName] = useState ("")
//     const [email, SetEmail] = useState ("")

//     const SubmitForm = (e) => {
//         e.preventDefault()
//         alert(`Your Email Is Sbmitted ${email}`)
//         console.log(e);
        
//     }

//     return (
//         <>
//         <div>
//             <h2>Form Input</h2>
//             <input 
//             type="text"
//             placeholder="Enter Your Name"
//             value={name}
//             onChange={ (e) => SetName(e.target.value) } 
//             />
//             <br />
//             <form onSubmit={SubmitForm}>
//             <input 
//             type="text"
//             placeholder="Enter Your Email"
//             value={email}
//             onChange={ (e) => SetEmail(e.target.value) }
//             />
//             <br />
//             <button type="Submit">Submit</button> <br 
//             />
//             </form>
//             <p>My Name is {name}</p> <br />
//             <p>My Email is {email}</p>
//         </div>
//       </>
//     )
// }