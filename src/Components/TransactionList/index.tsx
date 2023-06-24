// src/components/TransactionList.tsx

import React from "react"

import { Transaction } from "../types"

import {
  DeleteIconWrapper,
  EachItem,
  List,
  ListItem,
  ListItemWrapper,
  MainWrapper,
  TitleWrapper,
} from "./styledComponents"

interface TransactionListProps {
  transactions: Transaction[]
  onDeleteTransaction: (id: string) => void
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onDeleteTransaction,
}) => {
  return (
    <MainWrapper>
      <TitleWrapper>Transaction List:</TitleWrapper>
      <ListItemWrapper>
        <EachItem>Title</EachItem>
        <EachItem>Amount</EachItem>
        <EachItem>Type</EachItem>
      </ListItemWrapper>
      <List>
        {transactions.map((transaction) => (
          <>
            <ListItem key={transaction.id}>
              <EachItem>{transaction.title}</EachItem>
              <EachItem>{transaction.amount}</EachItem>
              <EachItem>
                {transaction.type}
                <DeleteIconWrapper
                  onClick={() => onDeleteTransaction(transaction.id)}
                >
                  <i
                    className="far fa-trash-alt delete-icon"
                    aria-hidden="true"
                  ></i>
                </DeleteIconWrapper>
              </EachItem>
            </ListItem>
          </>
        ))}
      </List>
    </MainWrapper>
  )
}

export default TransactionList
