// import { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "../../node_modules/react-router-dom/dist/index";

function Navigation() {
  const data = [
    {id:1, content:"현재", url:'/weather'},
    {id:2, content:"오늘", url:'/today'},
    {id:3, content:"내일", url:'/tomorrow'},
    {id:4, content:"모래", url:'/more'},
  ]

  /* let [color, setColor] = useState(""); 

  const toggleActive = (content) => {
    setColor(content);
  } */
  const activestyle = {
    backgroundColor: '#0047ba',
    color: '#fff',
    border:`1px #0047ba solid`
  }

 
  return (
    <ul className="maptab container">

     {/*  {
        data.map((item, idx) => <li key={item.id}>
                                   <Link to={item.url}
                                       className={'link' + (color === item.content ? " active" : "")}
                                       onClick={()=>toggleActive(item.content)}>{item.content}</Link>
                                </li>
                )
      } */}
     { data.map((item)=> <li key={item.id}>
      <NavLink to={item.url} activestyle={activestyle}>{item.content}</NavLink>
      </li>)}
    </ul>
  );
}

export default Navigation;