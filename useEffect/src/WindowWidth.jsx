
import { useState , useEffect } from 'react'

function WindowWidth() {
    const [width, setWidth] = useState (window.innerWidth)
    const [height, setHeight] = useState (window.innerHeight)

    useEffect ( () => {
        const resizeScreen = () => {                              // called function in which we connect DOM
            setWidth(innerWidth)                         
            setHeight(innerHeight)
        }
        window.addEventListener("resize", resizeScreen)           // resize screen

        return () => {
            window.removeEventListener("resize", resizeScreen)    // help in big functions to not use double useEffect
            console.log("Unsubscribed Function!");
            
        }
    }, [])
  return (
    <div>
        <h2>Window Width Tracker</h2>
        <p>Current Width : {width}</p>
        <p>Current Height : {height}</p>
    </div>
  )
}

export default WindowWidth