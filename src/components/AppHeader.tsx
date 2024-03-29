import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AppState } from "../store";
import { isLoggedIn } from "../store/actions/userActions";

function AppHeader() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: AppState) => state.user);
  useEffect(() => {
    dispatch(isLoggedIn() as any);
  }, []);
  const { pathname } = useLocation();
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
        {data.username ? (
          <React.Fragment>
            <Menu.Item key="/records">
              <Link to="/records">Harcama Kayıtları </Link>
            </Menu.Item>
            <Menu.Item key="/categories">
              <Link to="/categories">Kategory</Link>
            </Menu.Item>

            <Menu.Item key="/logout">
              <Link to="/logout">Çıkış</Link>
            </Menu.Item>
          </React.Fragment>
        ) : loading ? null : (
          <React.Fragment>
            <Menu.Item key="/login">
              <Link to="/login">Giriş </Link>
            </Menu.Item>
          </React.Fragment>
        )}
      </Menu>
    </Header>
  );
}

export default AppHeader;
