import { useState } from "react"
import CSS from "./InputSearch.module.css"
function InputSearch ({handleonAdd}){

  let [nname,setname]=useState();
  let [ndate,setdate]=useState();
  
  const handleonName=(event) =>{
    setname(event.target.value);
  }
  const handleonDate=(event) =>{
    setdate(event.target.value);
  }
  const handleonButtonAdd =()=>{
    handleonAdd(nname,ndate);
    setname("");
    setdate("");
  }

  return<>
  <div className={CSS.mainHead}>
    <input type="text" placeholder="Enter your Choice" value={nname} className={CSS.namebox} onChange={handleonName} />
    <input type="date" value={ndate} onChange={handleonDate}/>
    <button type="button" className={`${CSS.point} btn btn-info`} onClick={handleonButtonAdd}>Add</button>
  </div>
  </>
}

export default InputSearch;