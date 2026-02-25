import './App.css'


function ConditionalRenderig () {

     const isLoggedIn = false 
     const name = "Tally"
     const isVisible = true
     let visibility = isVisible ? "visible" : "hide"

     return (
        <div>
            {isLoggedIn ? <h1>Welcome Back {name}</h1> : <h1>{name}, Please First Login</h1>}

            <div>
                <h1 className={isVisible ? "visible" : "hide"}>Conditional Renderring</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea atque inventore similique. Accusamus eius molestias itaque, eos consequatur soluta.</p>
            </div>
            <div>
                <h1 className={visibility}>Another Conditional Renderring</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea atque inventore similique. Accusamus eius molestias itaque, eos consequatur soluta.</p>
            </div>
        </div>
     )

    // let message;

    // if (isLoggedIn === true) {
    //     message = <h1> Welcome Back, {name}</h1>
    // } else {
    //     message = <h1>Tally, Please First Login</h1>
    // }

    // return message
}
export default ConditionalRenderig