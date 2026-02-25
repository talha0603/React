import {useState, useEffect} from 'react'

function Try() {

    // const [count, setCount] = useState(0)
    const [second, setSecond] = useState (0)
    const [color, setColor] = useState("black")

    useEffect( () => {
        // document.title = `Count: ${count}`
        // console.log("Componenet Renderring Again");
        const timer = setInterval( () => {
            setSecond ( (prev) => prev + 1 )

            // color changer
            const color = ["red", "pink", "green", "purple", "yellow", "blue"];
            const random = color[Math.floor( Math.random() * color.length )];
            console.log(random);
            
            setColor(random);

        }, 1000);

        return () => {                       // clean=up function
            clearInterval(timer);
            console.log("Timer Cleared After Each Second");
            
        }
        
    }, [] )


  return (
    <div>
        {/* <p>Count: {count}</p>
        <button onClick={ () => setCount( count + 1 ) }>Press</button> */}
        <h2>Color Changing</h2>
        <p style={ {color: color} }>Seconds: {second}</p>
    </div>
  )
}

export default Try