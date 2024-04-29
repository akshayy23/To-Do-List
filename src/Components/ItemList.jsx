import CSS from "./ItemList.module.css";
function ItemList({name,ddate,handleonDel}){
  return <div className={`${CSS.inputline} row`}>
  <div className={`${CSS.namebox} col-6`}>
    {name}
  </div>
  <div className={`${CSS.datebox} col-3`}>
    {ddate}
  </div>
  <div className="col">
  <button type="button" className={`${CSS.point} btn btn-danger`} onClick={()=>handleonDel(name)} >Remove</button>
  </div>
</div>

}

export default ItemList;