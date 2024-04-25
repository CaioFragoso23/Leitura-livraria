"use client";
import styled from "styled-components";

export const BookCardImage = styled.div`
  z-index: 0;
  position: relative;
`;

export const BookCardContainer = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-shadow: 0px 0px 10px -8px;
  gap: 8px;
`;

export const BookCardDescription = styled.div`
  width: 100%;
  margin: 6px 12px;
  display: flex;
  align-items: center;

`;

export const BookCardTitle = styled.div`
  margin: 6px 12px;
  p {
    font-size: 2.074rem;
    font-weight: 500;
  }
`;

export const BookCardSummary = styled.div`
  p{
    text-overflow: clip;
  }
`;

export const BookCardAddTo = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  bottom: 10;
  display: flex;
  align-items: center;
  justify-content: start;

  button:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 24px;
    height: 100%;
    width: 100%;
    background-color: #00569d;
    color: #ffff;
    border: none;
    font-size: larger;
    p{ 
      display: flex;
      align-items: center;
      margin: 0;
    }
  }

  button:nth-child(2) {
    width: fill;
    border: none;
    background: #ffff;
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;

  
  }
`;
