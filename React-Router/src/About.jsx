import { useNavigate } from "react-router-dom"

function About() {

  const navigate = useNavigate();
  const returnBack = () => {
    navigate("/");
  }
  return (
    <div> 
      <h2>Welcome To About Page</h2>
      <button onClick={returnBack}>Return Back</button>
    </div>
  )
}

export default About