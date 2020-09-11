import React from "react";
import Cards from "../Component/Card/Card";
import Forms from "../Component/Form/Form";
import Modals from "../Component/Modal/Modal";

const index = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Cards />
      <hr />
      <Forms />
      <hr />
      <Modals />
    </div>
  );
};

export default index;
