import { useState , useEffect }  from 'react'

function API() {
    const [users, setUsers] = useState ([])

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])
  return (
    <div>
        <h2>User Lists</h2>
        {users.map ( (e) => (
            <li key={e.id}> {e.id} - {e.name} </li>
        ) )}
    </div>
  )
}

export default API