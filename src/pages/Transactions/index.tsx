import { Header } from "../../components/Header";
import { Summary } from "../Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%"> Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 17.400,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="50%"> Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 17.400,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
