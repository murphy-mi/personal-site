import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


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
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Content>
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
      </Content> */}
    </>
  );
}

export default App;
