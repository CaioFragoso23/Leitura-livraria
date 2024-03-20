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
    border-radius:50%;
    transform: translateX(-20%);
    right: 0;
    height: 90%;
    aspect-ratio: 1;
  }
`;



