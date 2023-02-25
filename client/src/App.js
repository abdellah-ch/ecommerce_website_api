import './App.css';
import React from 'react';
import axios from 'axios'
function App() {
  const [data,setData] =React.useState()
  React.useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get("/api/category")
      console.log(response);
    }
    fetchData().catch((err)=>{
console.log(err);
    })
  },[])
  return (
    <div className="App">
          .......///......
      </div>
  );
}

export default App;
