import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import { HashRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "./Footer";
import Header from "./Header";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 60px auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

const App = () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Wrapper>
            <AppRouter isLoggedIn={isLoggedIn} />
            <Footer />
            <ToastContainer
              position={toast.POSITION.BOTTOM_CENTER}
              draggable={true}
              autoClose={3000}
            />
          </Wrapper>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
