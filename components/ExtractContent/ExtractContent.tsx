import React from 'react'
import styled from '@emotion/styled'
import ExtractHeader from './Extract Header'
import ExtractTotal from './ExtractTotal'
import ExtractData from './ExtractData'
import db from '../uitls/db'



const ExtractContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 400px);
  position: absolute;
  right: 0;
  min-height: 100vh;
`

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
      <ExtractHeader/>
      <ExtractTotal />
      <ExtractData db={db}/>
      <ExtractTotal />
    </ExtractContentContainer>
  )
}
