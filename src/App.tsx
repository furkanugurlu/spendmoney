import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

import SignUp from "./components/SignUp";

import { Layout, Menu, Breadcrumb } from "antd";
import Login from "./components/Login";
import CategoryPage from "./components/Category";
import PrivateRoute from "./components/PrivateRoute";
import Recods from "./components/Recods";
import AppHeader from "./components/AppHeader";
import Logout from "./components/Logout";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <AppHeader />

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 100 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/categories"
            element={<PrivateRoute component={CategoryPage} />}
          />
          <Route
            path="/records"
            element={<PrivateRoute component={Recods} />}
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker @ React Dersleri 2021
      </Footer>
    </Layout>
  );
}

export default App;
