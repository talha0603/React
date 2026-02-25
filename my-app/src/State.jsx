
// it gives renderring whenever function is called
// useState can have numeric, boolean, alphabetic, arrays and objects
// Types Of State <--> Local State, Derived State, Global State, Server State, URL State <-->
// Hooks ----> useState, useEffect, useRef, useContext, useMemo, useCallback, useReducer, useLayoutEffect
// useImperativeHandle, useTransition, useDeferredValue, useId

import { useEffect, useState } from "react"

// changes the value in a variable
export default function State () {

    let [count, setcount] = useState (0)
    function change () {
        setcount(count + 1)
        console.log(count);
        
    }
    useEffect ( () => {
        console.clear()
        console.log("Updated Value is: ", count);
        document.title = `Count: ${count}`;
    }, [count])

    // useEffect( () => {
    //     const timer = setInterval( () => {
    //         console.log("Running");
            
    //     }, 1000)
    //     return () => clearInterval(timer)
    // }, [])

    // useEffect( () => {
    //     fetch("https://api.com/users")
    //     .then(res => res.json)
    //     .then(data => setUsers(data))
    // } )

    return (
        <div>
            <div>
                <h3>Count: {count}</h3>
                <button onClick={change}>Click</button>
            </div>
        </div>
    )
}