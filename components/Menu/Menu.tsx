import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: sans-serif;
  background-color: #242424;
  color: #f8f8f8;
  ul{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li{
      font-weight: 400;
      font-size: 1rem;
      list-style: none;
      line-height: 60px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover{
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
    }
  }
`

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          {/* <Link>
            {<Icon type="home" />}
          </Link> */}

          <a>Início</a>
          </li>
        <li>Extrato</li>
        <li>Transferência</li>
        <li>Pagamento</li>
        <li>Cartões</li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  )
}
