import React ,{useState,useLayoutEffect} from 'react'
import GallaryContainer from './Components/GallaryContainer'
import axios from 'axios'
import spinner from './assets/1490.gif'

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
        {data.length ===0 ?
           <div style={{textAlign:'center',margin:'250px',fontFamily:'sans-serif'}}>
             <img src={spinner} alt="spinner"/>
             <h3>...Loading </h3>
           </div>
          :
           <GallaryContainer data={data}/>
          }
        
    </div>
  );
}

export default App;
