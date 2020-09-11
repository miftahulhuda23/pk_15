import React from "react";
import Index from "./Pages/Index";
import { Container } from "react-bootstrap";
import Navs from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navs />
      <Container>
        <Index />
      </Container>
    </div>
  );
}

export default App;
