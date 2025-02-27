import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [error, setError] = useState(false)
  const [color, setColor] = useState('')
  const [list, setList] = useState(new Values('#f15025').all(10))
  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    } catch(error) {

      setError(true)
      console.log(error)
    }
    
  }
  return (
    <>
      <section className="cntainer">
        <h3>color generator </h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} placeholder='#f15025' onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error' : null}`}/>
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) =>{
          return <SingleColor key={index} {...color} index={index} hexColor ={color.hex}></SingleColor>
        })}
      </section>
    </>
  )
}

export default App
