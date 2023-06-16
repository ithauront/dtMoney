import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TransactionsContainer } from "./styles";

export function Transactions () {
    return(
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
            <table>
                <body>
                 
                    <tr>
                        <td width="50%">Desenvolvimento do site</td>
                        <td>R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2023</td>
                    </tr>
                    <tr>
                        <td width="50%">Pizza</td>
                        <td>- R$ 59,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2023</td>
                    </tr>
                   
                </body>
            </table>
            </TransactionsContainer>
        </div>
    )
}