import ItemList from "./ItemList"

export default function HealthListMain({HealthCheck,handleonDel}){
return <>
  {
  HealthCheck.map((item)=> <ItemList key={item.name} name= {item.name} ddate={item.dueDate} handleonDel={handleonDel}></ItemList>)
  }
  </>
}