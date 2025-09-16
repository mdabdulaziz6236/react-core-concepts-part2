import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]= useState(0)
    const [sixes , setSixes] = useState(0)
    const handleSingle= ()=>{
        const updateRuns = runs + 1
        setRuns(updateRuns) 
    }
    const handleFour = ()=> {
        const updateRuns = runs +4
        setRuns(updateRuns)
    }
    
    const handleSix = ()=> {
        const updateRuns = runs +6
        setRuns(updateRuns)
         const updateSixes = sixes +1
        setSixes(updateSixes)

    }
    return(
        <div>

            <h3>Player: Bangla Batsman</h3>
            { 
                runs>50 && <p>your run 50</p>
                

            }
            {runs>100 && <p>your run 100</p>}
            <p><small>Six: {sixes}</small></p>
            <h3>Score: {runs}</h3>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}