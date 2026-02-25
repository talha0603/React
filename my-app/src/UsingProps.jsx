

function UsingProps ({name = "Unknown", age = "Unknown", city = "Unknown", Hobbies}) {
    // cannot change value that's passed as a parameter
    // it also shows how we pass array as props using .map()

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>

            <div>
                <h2>Hobbies</h2>
                <ul>
                    {Hobbies.map( (hobby, index) => (
                    <li key={index}>{hobby}</li>
                ) )}
                </ul>
            </div>
        </div>
    )
}
export default UsingProps

// Another Method

// function UsingProps (props) {
//     // this object is equal to the prop in the parameter
//     const {name, age, city} = props

//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>City: {city}</p>
//         </div>
//     )
// }
// export default UsingProps