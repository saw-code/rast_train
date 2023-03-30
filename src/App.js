import React from 'react';
import Navigation from "./components/Navigation";
import {Divider} from "antd";
import OurTable from "./components/Table";

function App() {
  return (
    <>
      <Navigation/>
      <Divider />
      <OurTable />
    </>)

}

export default App;
