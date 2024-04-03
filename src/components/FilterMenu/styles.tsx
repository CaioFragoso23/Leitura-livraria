"use client";
import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100dvw;
  position: relative;
`;


export const FilterContainer = styled.div`
  margin-top: 80px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 62px;
  background-color: #00569d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  a{ 
    border: none;
    display: inline-block;
    background-color: transparent;
    padding: 6px 8px;
  }
  a:hover menu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
`;

export const Filter = styled.div`
    border: none;
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 6px 8px;
    color: rgb(255, 255, 255);

`;

export const FilterList = styled.menu`
  display: none;
  position: absolute;
  left: 0;
  background-color: #f9f9f9;
  width: 100%;
  max-height: 300px;
  box-shadow: 0px 12px 16px -6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  z-index: 1;

  li {
    list-style: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    text-align: left;
    flex-wrap: wrap;
  }

  li::before {
    content: "🢒";
    color: grey;
    margin-right: 8px;
    height: 100%;
  }
`;

