import { useState } from "react"



export default function MultiInput () {

    const [form, setForm] = useState ({
        name: "",
        email: "",
        age: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
        
    }
    const changeSubmit = (e) => {
        const { name, value} = e.target;            // it will target form vales

        setForm ( (prev) => ({
            ...prev,
            [name]: value
        }) )
    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Multi Input Form</h2>

            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={form.name} 
            onChange={changeSubmit}
            />
            <br />

            <input 
            type="email" 
            name="email" 
            placeholder="Email"
            value={form.email}
            onChange={changeSubmit} 
            />
            <br />

            <input 
            type="age" 
            name="age" 
            placeholder="Age"
            value={form.age}
            onChange={changeSubmit} 
            />
            <br />

            <button 
            type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}