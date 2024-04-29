import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

// Importing Components
import Heading from "./Components/Heading"
import InputSearch from "./Components/InputSearch"
import ItemList from "./Components/ItemList"
import HealthListMain from "./Components/HealthListMain"
import { useState } from "react"



function App() {
  //  const HealthCheck=[
  //   ,
  //  ];


   const [HealthCheck,setHealthCheck]=useState([{
    name :"Buy Insurance",
     dueDate : "4/10/2023",
    }])

    const handleonAdd =(name,date)=>{
      if(name!=="" && date!=="" && name!==null && date!==null )   //One line is getting add
      setHealthCheck([...HealthCheck,{name: name, dueDate: date}]);
    }

    const handleonDel= (delname)=>{
      let newarr= HealthCheck.filter((item)=> item.name!== delname)
      setHealthCheck(newarr);
    }



  return <div className="fullbody">
    <div className="divbody">
      <Heading></Heading>
      <InputSearch handleonAdd={handleonAdd}></InputSearch>
      <HealthListMain HealthCheck={HealthCheck} handleonDel={handleonDel}  ></HealthListMain>
    </div>
  </div>
}

export default App
