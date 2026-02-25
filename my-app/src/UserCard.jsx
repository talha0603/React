

export default function UserCard ({user}) {


    return (
        <div style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px"
        }}>
            <h2>{user.name}</h2>
            <p>Job : {user.job}</p>
            <p>Company : {user.company}</p>
            <p>Experience : {user.experience} years</p>

            <h4>Skills</h4>
            <ul>
                {user.skills.map( (skill, index) => (
                    <li key={index}>{skill}</li>
                ) )}
            </ul>
        </div>
    )
}