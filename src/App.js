import React from 'react';
import Navigation from "./components/Navigation";
import {Divider} from "antd";
import OurTable from "./components/Table";
import MyForm from "./components/Form";

function App() {
  return (
    <>

      <Navigation/>
      <Divider />
      <OurTable />
      <Divider />
      <MyForm />
    </>)

}

export default App;
