
// you can write this way if do not wanna write export separately
export default function FunctionAsProps ({label, handle}){
    return (
        <div>
            <button onClick={handle}>{label}</button>
        </div>
    )
}