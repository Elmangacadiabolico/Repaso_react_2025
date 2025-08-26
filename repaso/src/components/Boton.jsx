import React, { use } from 'react'
import { useState } from 'react'


 function boton() {
  const [count, setCount] = useState(0)
  console.log(count)
  const  [inputs, setInputs] = useState("")



  return (
    <>

    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          tenes  {count} de 木こり
        </button>
      </div>
    

    </>
  )
}
export default boton
