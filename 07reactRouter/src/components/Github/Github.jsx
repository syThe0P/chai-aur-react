import React, { useEffect, useState } from 'react'


function Github() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/syThe0P')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])



  return (
    <div className='flex flex-col mx-auto text-white p-4 text-3xl bg-gray-600'>
        <img className='mx-auto' src={data.avatar_url} alt="git pic" width={300} />
        <div className='text-center my-2'>Github followers : {data.followers}</div>
    </div>
  )
}

export default Github