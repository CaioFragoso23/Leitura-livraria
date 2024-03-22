"use client";
import styled from "styled-components";

export const LeituraHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 1200px;
  padding: 0 20px;
  height: 80px;
  background-color: #f9f9f9;
`;

export const LeituraNav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;

  button {
    border: none;
    display: inline-block;
    position: relative;
    background-color: transparent;
    padding: 6px 8px;
  }

  button:hover {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px -4px 16px 0px rgba(0, 0, 0, 0.2);
  }

  button:hover div {
    display: block;
    /* flex-direction: column;
    align-items: start;
    justify-content: center; */
  }
`;

export const LeituraSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 400px;
  max-width: 100%;
  position: relative;

  input {
    padding: 0.5rem 1rem;
    color: black;
    background-color: white;
    border-radius: 80px;
    border: 2px solid #00569d;
    width: 100%;
  }
  button {
    position: absolute;
    background-color: #00569d;
    border: none;
    border-radius: 50%;
    transform: translateX(-20%);
    right: 0;
    height: 90%;
    aspect-ratio: 1;
  }
`;
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 12px 16px -6px rgba(0, 0, 0, 0.2);
  border-radius: 8px 0 8px 8px;
  padding: 12px 16px;
  z-index: 1;
`;

export const AccountContent = styled.div`
  width: 100%;
  
  a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 12px 16px;
  }
  a:hover {
    background-color: #00569d;
    color: white;
  }
`;
