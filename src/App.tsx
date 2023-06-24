import React, { useState } from "react"

import GlobalStyles from "./Components/GlobalStyles"
import TransactionForm from "./Components/TransactionFrom"
import TransactionList from "./Components/TransactionList"
import { Transaction } from "./Components/types"
import { CurrentBalcWrapper, MainContainer } from "./styledComponents"

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction])
  }

  const handleDeleteTransaction = (id: string) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    )
  }

  const getCurrentBalc = (): number => {
    let currentBalc = 0
    transactions.forEach((eachTransaction) => {
      if (eachTransaction.type === "income") {
        currentBalc += eachTransaction.amount
      } else {
        currentBalc -= eachTransaction.amount
      }
    })

    return currentBalc
  }

  return (
    <MainContainer>
      <h1>Personal Finance Tracker</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <CurrentBalcWrapper>
        Current Balance: {getCurrentBalc()}
      </CurrentBalcWrapper>
      <GlobalStyles />
    </MainContainer>
  )
}

export default App
