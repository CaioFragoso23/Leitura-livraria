"use client"
import { createGlobalStyle } from "styled-components";
const styled = {createGlobalStyle}

export const GlobalStyle = styled.createGlobalStyle`

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
