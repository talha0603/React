import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  }
  return (
    <div> 
      <h2>Welcome To Home Page</h2>
      <button onClick={goToAbout}>Go To About</button>
    </div>
  )
}

export default Home