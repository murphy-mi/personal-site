import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/navbar/NavBar";
import PortfolioPage from "./components/portfoliopage/PortfolioPage";

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
`;

const Content = styled.div`
  /* background: linear-gradient(
    90deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(33, 33, 33, 1) 50%,
    rgba(18, 18, 18, 1) 100%
  ); */
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
`;

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Content>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/works"
            element={
              <PortfolioPage />
            }
          />
        </Routes>
      </Content>
    </>
  );
}

export default App;