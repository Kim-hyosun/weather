import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const data = [
    {id:1, content:"현재", url:'/'},
    {id:2, content:"오늘", url:'/today'},
    {id:3, content:"내일", url:'/tomorrow'},
    {id:4, content:"모래", url:'/more'},
  ]

  let [color, setColor] = useState(""); 

  const toggleActive = (content) => {
    setColor(content);
  }
 
  return (
    <ul className="maptab container">

      {
        data.map((item, idx) => <li key={item.id}>
                                   <Link to={item.url}
                                       className={'link' + (color === item.content ? " active" : "")}
                                       onClick={()=>toggleActive(item.content)}>{item.content}</Link>
                                </li>
                )
      }
    </ul>
  );
}

export default Navigation;