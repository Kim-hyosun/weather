import "./style/nav.scss"

function Nav() {
  return (
    <nav>
      <ul className="container">
        {/* link기능 없는 상태 */}
        <li>날씨</li>
        <li>미세먼지</li>
      </ul>
    </nav>
  );
}

export default Nav;