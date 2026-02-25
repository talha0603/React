import {useState } from "react"

export default function AdvancedForm () {

    const [form, setForm] = useState ({       // keys must be same as they have name in labels/inputs
        gender: "",
        country: "Pakistan",
        agree: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
        
    }
    const changeSubmit = (e) => {
        const { name, type, value, checked} = e.target;

        setForm ( (prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }) )
    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Form With Radio , Select & Checkbox</h2>

                <label>Select Your Gender</label>
                <br />

                <label>
                    <input 
                    type="radio" 
                    name="gender" 
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={changeSubmit} 
                    />
                    Male
                </label>
                <br />

                <label>
                    <input 
                    type="radio" 
                    name="gender" 
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={changeSubmit} 
                    />
                    Female
                </label>
                <br />

                <label>
                    <input 
                    type="radio" 
                    name="gender" 
                    value="Others"
                    checked={form.gender === "Others"}
                    onChange={changeSubmit}
                    />
                    Others
                </label>
                <br />


                <label>
                    Country: 
                    <select 
                    name="country"
                    value={form.country} 
                    onChange={changeSubmit}>
                    <option value="Pakistan">Pakistan</option>
                    <option value="United States">United States</option>
                    <option value="Russia">Russia</option>
                    <option value="Germany">Germany</option>
                    </select>
                </label>
                <br />

                <label>
                    <input 
                    type="checkbox" 
                    name="agree"
                    checked={form.agree}
                    onChange={changeSubmit}  
                    />
                    I agree to the terms and conditions
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}