import React, { useState } from 'react'
 
function App() {
  const colors=JSON.parse(localStorage.getItem("color"))
  const [r,setr]=useState(colors && colors.r?colors.r:0)
   const [g,setg]=useState(colors && colors.g?colors.g:0)
    const [b,setb]=useState(colors && colors.b?colors.b:0)

    const save=()=>{
      console.log("save");

      localStorage.setItem("color",JSON.stringify({r,g,b}))
    }


  return (
    <>        <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>           
                   <h1 className='bg-purple-200 p-4 rounded-full shadow'>
  <span className='text-purple-700 font-semibold'>Color</span>
  <span className='text-pink-600 font-semibold'>Mixer</span>
</h1>
               <div style={{ backgroundColor:`rgb(${r}, ${g}, ${b})`}}  className="
    w-[160px] h-[160px] 
    md:w-[220px] md:h-[220px] 
    rounded-full border-4 
    transition-all duration-300 shadow-xl
  "></div>
            <label htmlFor="1" className='text-red-600 font-bold text-2xl' >Red</label>
            <input type="range" defaultValue={r} id='1' min={0} max={255} onChange={(e)=>setr(e.target.value)} className='range-red'/>
           
            <label htmlFor="2" className='text-green-600 font-bold text-2xl'>Green</label>
            <input type="range" defaultValue={g} id='2' min={0} max={255} onChange={(e)=>setg(e.target.value)} className='range-green '/>
 
            <label htmlFor="3" className='text-blue-600 font-bold text-2xl'>Blue</label>
            <input type="range" defaultValue={b} id='3' min={0} max={255} onChange={(e)=>setb(e.target.value)} className='range-blue'/>
 
             <button onClick={save} className='text-red-600 font-bold rounded-full bg-green-300 p-4 '> Save  <span className='text-blue-600 font-bold text-xl md:text-2xl'>Color Combination</span> </button>
               
                <h1 className="text-orange-600 font-bold text-[10px] md:text-2xl">
               RED<span className='text-red-600 font-bold text-[10px] md:text-2xl'>{`=${r}`}</span> 
               - GREEN<span className='text-green-600 font-bold  text-[10px] md:text-2xl'>{`=${g}`}</span> 
                - BLUE<span className='text-blue-600 font-bold  text-[10px] md:text-2xl'>{`=${b}`}</span>
               </h1>
             
           </div>

    </>
  )
}

export default App
