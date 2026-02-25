// if i use this (import './App.css') inside one component
// and this component is the part of another component
// then other nested component can also use this 
import myStyle from "./Greetings.module.css"

function Greetings() {
    const name = "Tally"
    return (
        <>
        <h3 className={myStyle.colorHomeOne}>Thank You! For Using Our Services, {name}</h3>
        <p className={myStyle.colorHomeOne}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis?</p>
        </>
    )
}

export default Greetings