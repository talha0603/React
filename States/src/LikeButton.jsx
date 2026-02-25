
// auto loads full component structure
import { useState } from "react"

function LikeButton() {

    const [like, Setlike] = useState (false)
  return (
    <div>
        <button onClick={ ()=> Setlike(!like) }>
        {like ? "💖 liked" : "🤍 like" }
        </button>
        
    </div>
  )
}

export default LikeButton
