import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/searchForm'
import {
  PriceHighLight,
  TableWrapper,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/transactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TableWrapper>
          <TransactionsTable>
            <tbody>
              {transactions.length === 0 && (
                <div
                  style={{
                    backgroundColor: '#F75A68',
                    color: '#000',
                    padding: '1rem',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Carregando transações... O servidor pode estar despertando.
                  Isso pode levar alguns segundos.
                </div>
              )}
              {transactions.map((transactions) => {
                return (
                  <tr key={transactions.id}>
                    <td>{transactions.description}</td>
                    <td>
                      <PriceHighLight variant={transactions.type}>
                        {transactions.type === 'outcome' && '- '}
                        {priceFormatter.format(transactions.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transactions.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transactions.createdAt))}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </TransactionsTable>
        </TableWrapper>
      </TransactionsContainer>
    </div>
  )
}
