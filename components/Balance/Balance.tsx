import React, {useState} from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 40px;
  width: 100%;
  height: 80px;
  background-color: #242424;
  color: #f8f8f8;
  & > strong{
    width: 80%;
    font-size: 1.5rem;
    margin-right: 10%;
    /* color: red; */
  }
  button{
    border: none;
    color: #f8f8f8;
    background: transparent;
    cursor: pointer;
  }
`

type BalanceProps = {
  amount: number;
}

export default function Balance(props: BalanceProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <BalanceContainer>
        { show ?
        <strong>{new Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format( props.amount)}</strong>
        :
        <strong>R$***********</strong>
        }
        <button onClick={() => setShow(!show)}>
        {show ? <VisibilityIcon /> : <VisibilityOffIcon />}

        </button>
    </BalanceContainer>
  )
}
