import React ,{useState,useLayoutEffect} from 'react'
import GallaryContainer from './Components/GallaryContainer'
import axios from 'axios'
function App() {
  const [data,setData]=useState([])
    
  useLayoutEffect(()=>{
      axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
      .then((res)=>{
        const data=res.data
          const result=data.map((ele)=>{
            return { id : ele.id, raw :ele.urls.raw, regular:ele.urls.regular }
          })
          setData(result)
      })  
      .catch((err)=>{
          alert(err)
      })
  },[])

  return (  
    <div className="App">
        <GallaryContainer data={data}/>
    </div>
  );
}

export default App;
