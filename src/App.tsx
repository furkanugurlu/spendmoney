import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

import SignUp from "./components/SignUp";

import { Layout, Menu, Breadcrumb } from "antd";
import Login from "./components/Login";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 100 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker @ React Dersleri 2021
      </Footer>
    </Layout>
  );
}

export default App;
