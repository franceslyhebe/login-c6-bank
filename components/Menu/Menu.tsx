import React from "react";
import MenuContainer from "./MenuContainer";
import Link from "next/link";
import {
  FaHouseUser,
  FaCreditCard,
  FaReceipt,
  FaMoneyBillWave,
  FaWallet,
  FaCommentDollar,
} from "react-icons/fa";

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href="#">
            <FaHouseUser fontSize="small" />
          </Link>

          <a>Início</a>
        </li>

        <li>
          <Link href="#">
            <FaReceipt fontSize="small" />
          </Link>
          <a>Extrato</a>
        </li>

        <li>
          <Link href="#">
            <FaMoneyBillWave fontSize="large" />
          </Link>
          <a>Transferência</a>
        </li>

        <li>
          <Link href="#">
            <FaWallet fontSize="large" />
          </Link>
          <a>Pagamento</a>
        </li>

        <li>
          <Link href="#">
            <FaCreditCard fontSize="large" />
          </Link>

          <a>Cartões</a>
        </li>

        <li>
          <Link href="#">
            <FaCommentDollar fontSize="large" />
          </Link>
          <a>Crédito</a>
        </li>
      </ul>
    </MenuContainer>
  );
}
