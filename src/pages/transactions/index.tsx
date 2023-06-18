import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/searchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
    return(
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
            <TransactionsTable>
                <tbody>
                 
                    <tr>
                        <td width="50%">Desenvolvimento do site</td>
                        <td>
                        <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2023</td>
                    </tr>
                    <tr>
                        <td width="50%">Pizza</td>
                        <td>
                        <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/04/2023</td>
                    </tr>
                    </tbody>   
               
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}