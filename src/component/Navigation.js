import { NavLink } from "react-router-dom";

function Navigation() {
  const data = [
    {id:1, content:"현재", url:'/'},
    {id:2, content:"오늘", url:'/today'},
    {id:3, content:"내일", url:'/tomorrow'},
    {id:4, content:"모래", url:'/more'},
  ]

  const activestyle = {
    backgroundColor: '#0047ba',
    color: '#fff',
    border:`1px #0047ba solid`
  }

  return (
    <ul className="maptab container">
     { data.map((item)=> <li key={item.id}>
      <NavLink to={item.url} end style={({ isActive }) => (isActive ? activestyle : undefined)}>{item.content}</NavLink>
      </li>)}
    </ul>
  );
}

export default Navigation;
