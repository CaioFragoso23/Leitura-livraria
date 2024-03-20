import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
*{
  max-width: 1200px;
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "EB Garamond, serif";
}
button, a {
  cursor: pointer;
}
`;
