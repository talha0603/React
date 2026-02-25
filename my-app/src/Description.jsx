
function Description () {

    const name = "My name is Talha Makhdoom"
    // pass this object name in style or use {{}} for styling
    // const descriptionStyle = {
    //     color: "white",
    //     backgroundColor: "green",
    //     padding: "25px",
    //     textAlign: "center",
    //     fontSize: 50
    // }
    return <h2 style={{color: "white", backgroundColor: "green", padding: "25px", textAlign: "center"}}>Hello, {name}</h2>
        
}

export default Description