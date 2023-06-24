import React, { useState } from "react"

import { Transaction } from "../types"

import {
  Form,
  InputField,
  SelectField,
  Options,
  Button,
  ErrorMessage,
} from "./styledComponents"

interface TransactionFormProps {
  onAddTransaction: (transaction: Transaction) => void
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  onAddTransaction,
}) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("")
  const [error, setError] = useState("")

  const isErrorNotExist = (): boolean => {
    if (!title) {
      setError("*Title is required")
      return false
    } else if (!type) {
      setError("*Type is required")
      return false
    }
    setError("")
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isErrorNotExist()) {
      const transaction: Transaction = {
        id: new Date().getTime().toString(),
        title,
        amount,
        type,
      }
      onAddTransaction(transaction)
      setTitle("")
      setAmount(0)
      setType("")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          setError("")
        }}
      />
      <InputField
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <SelectField
        value={type}
        onChange={(e) => {
          setType(e.target.value)
          setError("")
        }}
      >
        <Options value="">Select Type</Options>
        <Options value="income">Income</Options>
        <Options value="expense">Expense</Options>
      </SelectField>
      <Button type="submit">Add Transaction</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  )
}

export default TransactionForm
