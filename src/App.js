import React from "react";
import Header from "./components/Header";
import TotalExpenses from "./components/TotalExpenses";
import SearchFilter from "./components/SearchFilter";
import AddExpenseModal from "./components/AddExpenseModal";
import ExpenseList from "./components/ExpenseList";
import Chart from "./components/Chart";
import TopExpensesChart from "./components/TopExpensesChart";
import GlobalStyle from "./styles/GlobalStyle";

import {
  Container,
  ContentWrapper,
  LeftColumn,
  RightColumn,
} from "./styles/App.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />

        <ContentWrapper>
          <LeftColumn>
            <TotalExpenses />
            <SearchFilter />
            <AddExpenseModal />
            <ExpenseList />
          </LeftColumn>

          <RightColumn>
            <TopExpensesChart />
            <Chart />
          </RightColumn>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default App;
