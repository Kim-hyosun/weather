import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
a {
  display: block;
  color: #3e3a39; text-decoration: none;
}

body {
  color: #3e3a39;
  letter-spacing: -0.2px;
}

.container {width: 1280px; margin: 0 auto;}
@media only screen and (max-width: 1300px) {
       #wrap{overflow-x:hidden}
      .container{
        max-width:1280px;
        width:640px;
      }
    }

@media only screen and (max-width: 640px) {
    .container{
      min-width: 200px;
      max-width: 400px;}
    }

.point {
  background-color: #0047ba;
}
/* .leaflet-control-container {
  display: none;
}*/
`;

export default Globalstyle;