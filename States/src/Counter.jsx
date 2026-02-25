import { useState } from "react";

export default function Counter () {

    let [count, setcount] = useState (0)

    const increase = () => {
        setcount(count + 1)
    }
    const decrease = () => {
        setcount(count - 1)
    }

    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}