// auto loads full component structure
import { useState } from "react"

function ToggleText() {

    const [visible, Setvisible] = useState (false)
  return (
    <div>
        <button onClick={ ()=> Setvisible(!visible) }>
        {visible? "Hide" : "Show" }
        </button>
        
        {visible && <p>This is text message</p> }
        {!visible && <p>Message is hidden</p> }
    </div>
  )
}

export default ToggleText