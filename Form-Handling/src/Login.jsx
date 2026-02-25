import { useState } from "react"


export default function LoginForm () {

    const [form, setForm] = useState ({
        email: "",
        password: ""
    })
    const [error, setError] = useState ("")

    const SubmitChange = (e) => {
        setForm ({...form, [e.target.name]: e.target.value})
    }
    const SubmitHandling = (e) => {
        e.preventDefault()
        console.log(form);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(form.email)) {
            alert("Enter Email In Proper Form")
        } else {
            setError();
            alert("Email is now Verified!")
        }
        
    }

    
    return (
        <>
        <div>
            <form onSubmit={SubmitHandling}>
                <input 
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={SubmitChange}
                />
                {error && <p style={ {color: "red"} }> {error} </p>}
                <br />
                <input 
                name="password"
                type="password"
                value={form.password}
                placeholder="Password"
                onChange={SubmitChange}
                />
                <br />
                <button type="Submit">Submit</button>
            </form>
        </div>
        </>
    )
}