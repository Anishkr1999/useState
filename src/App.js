import React, { useState } from "react"
import "./index.css"




const App = ()=>{
const[count,setCount]=useState(0 )

const IncNum = ()=>{
  setCount(count+1)
  console.log("clicked" + count++)
}
  return(
    <>
    <div className="main">
<div className="center">

<h1>{count}</h1>
<button onClick={IncNum}>Click Me</button>
</div>
    </div>
    </>
  )

}
export default App;
