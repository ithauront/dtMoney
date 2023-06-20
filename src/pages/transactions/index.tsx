import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/searchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
id: number,
description: string,
type: 'income' | 'outcome',
price: number,
category: string,
createdAt: string
}

export function Transactions () {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();

        setTransactions(data);
    }
useEffect(()=> {
    loadTransactions()
},[])

    return(
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transactions => {
                        return(
                            <tr key={transactions.id}>
                            <td width="50%">{transactions.description}</td>
                            <td>
                            <PriceHighLight variant={transactions.type}>R$ {transactions.price}</PriceHighLight>
                            </td>
                            <td>{transactions.category}</td>
                            <td>{transactions.createdAt}</td>
                        </tr>
                        )
                    })}
                </tbody>   
               
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}