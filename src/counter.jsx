import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)
    const counterStyle = {
        border:'2px solid yellow'
    }
    const handleAdd = ()=>{
        // console.log('add button clicked')
        const newCount = count + 1
        setCount(newCount)
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}