import axios from 'axios'
import React from 'react'
import { useState } from 'react'
function App() {
  const [data, setdata] = useState([])
 const getdata=async()=>{
 const res= await axios.get('https://picsum.photos/v2/list?page=2&limit=50')
 setdata(res.data)
 console.log(res.data)
}
  let printuserdata="no user available"
if(data.length>0){
printuserdata=data.map(function(elem,idx){
return <div className='h-50 w-50 bg-white rounded-2xl overflow-hidden' key={idx}>
  <img className='h-[80%] w-full' src={elem.download_url}/>
  <p>{elem.id}.{elem.author}</p>
</div>
})
}
  return (
<>
<div className='text-center mt-5 mb-5'>
<button onClick={getdata} className='rounded-4xl bg-green-400 text-white px-[3vw] py-[1vh] active:scale-90'>get data</button>
<div className='flex flex-wrap gap-4 mt-5 bg-green-500 p-5 justify-center'>
{printuserdata}
</div>
</div>
</>
  )}
export default App
