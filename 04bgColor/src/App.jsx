import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap bottom-12 inset-x-0 justify-center px-2 duration-200'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'>
          <button onClick={()=> setColor("red")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("orange")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=> setColor("yellow")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=> setColor("green")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("indigo")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"indigo"}}>Indigo</button>
          <button onClick={()=> setColor("violet")} className='outline-none rounded-full px-3 py-1' style={{backgroundColor:"violet"}}>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
