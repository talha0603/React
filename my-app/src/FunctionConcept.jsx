

function FunctionConcept () {                // main function

    function thanksGiving() {                // function created
        return "Subscribing Us!"
    }

    // function with parameter
    (welcome) => {
        return welcome;
    }
    const party = "Party";
    const house = "House"

    // uses onClick Event
    function alertBox () {
        alert('Button Was Clicked!')
    }

    // uses onChange Event
    const form = (val1) => {
        console.clear()                               // first clear old values and then show new values
        console.log(val1.target.value);
        
    }

    const mouseOver = () => {
        console.log("Mouse is over the Heading");
        
    }

    const doubleClick = (color) => {
        console.log("Paragraph is doubled clicked");
        color.target.style.backgroundColor = "green"
        
    }

    return (
        <>
        <h3>Thanks For {thanksGiving()}</h3> 
        <div>
            <h3>Welcome To The {(party)}</h3>
            <h3>Welcome To The {(house)}</h3>
            <button onClick={alertBox}>Click Me</button>
            <button onClick={()=> alert('Inline Function Welcomes You')}>Message</button>
            <br />
            <input type="text" name="Input Field" placeholder="Write Something" onChange={form}/>
        </div>
        <div>
            <h2 onMouseOver={mouseOver}>Mouse Over</h2>
            <p onDoubleClick={doubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nemo excepturi mollitia et itaque veritatis?</p>
        </div>
        </>
    )
}

export default FunctionConcept
