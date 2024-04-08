"use client"
import { createGlobalStyle } from "styled-components";
const styled = {createGlobalStyle}

export const GlobalStyle = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
*{
  padding: 0;
  margin: 0 auto;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "EB Garamond", serif;
  font-optical-sizing: auto;

  button, a {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }

}
`;
