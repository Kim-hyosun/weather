import { Link } from "react-router-dom";
import "./style/header.scss"

function Header() {
  return (
    <header className="container">
      <div className="logo">
        <h1 className="logo1">케이웨더로고</h1>
        <h1 className="logo2">날씨와 미세먼지</h1>
      </div>
      <Link className="homeBtn">케이웨더 홈</Link>
    </header>
  );
}

export default Header;