// Nested Route Uses Link & Outlet In The Main Componenet
// Where Nested Is To Be Done
import { Link, Outlet } from "react-router-dom"

function Products() {
  return (
    <div>
        <h2>Latest Searches</h2>
        <nav>
            <Link to="phone">Phone</Link> |
            <Link to="laptop">Laptop</Link> |
        </nav>

        <Outlet />
    </div>
  )
}

export default Products