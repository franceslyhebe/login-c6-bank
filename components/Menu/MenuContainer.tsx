import React from "react";
import styled from '@emotion/styled'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  background-color: #242424;
  color: #f8f8f8;
  ul{
    width: 100%;
    height: 190px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::-webkit-scrollbar-thumb{
      background: #242424;
      outline: 1px solid #999;
      border-radius: 2px;
    }
    &::-webkit-scrollbar{
      width: 8px;
    }
    li{
      font-weight: 400;
      font-size: 1rem;
      width: 95%;
      list-style: none;
      line-height: 30px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover{
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
      & > a {
        margin-left: 10px;
      }
    }
  }
`

export default MenuContainer;
