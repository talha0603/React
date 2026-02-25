
function Objects () {

    const myProfile = {name: 'M Talha Makhdoom', fatherN: 'Mushtaq Ahmad Makhdoom', age: 22}

    const profileEmployee = {fname: 'M Talha', lname: 'Makhdoom', age: 22}
    function fullName (profileEmployee) {        // pass object as parameter
        return profileEmployee.fname + " " + profileEmployee.lname
    }

    // databse concept
    const userLists = [
        {fname: 'M Talha', lname: 'Makhdoom', age: 22},
        {fname: 'Waseem', lname: 'Akram', age: 21},
        {fname: 'Fahad', lname: 'Iqbal', age: 21},
        {fname: 'Zia Khan', lname: 'Rehmani', age: 25}
    ]
    const database = (user) =>  user.fname + " " + user.lname
    

    return (
        <div>
            <p>Name : {myProfile.name}</p>
            <p>Father Name : {myProfile.fatherN}</p>
            <p>Age: {myProfile.age}</p>

            <div>
                <h2>Employee Details</h2>
                <p>Full  Name: {fullName(profileEmployee)}</p>
                <p>Age: {profileEmployee.age}</p>
            </div>

            {/* Database Concept */}
            <div>
                <h2>Chharry Log</h2>
                <ul>
                    {userLists.map( (user, index) => (
                        <li key={index}>
                            {database(user)} is {user.age} years old.
                        </li>
                    ) )}
                </ul>
            </div>
        </div>
    )
}
export default Objects