import React, { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import { Container, Content, Header } from "./style";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { turnAuthTrueFailure } from "../../store/modules/auth/action";
import Products from "../../components/Products";
import AddProduct from "../../components/AddProduct";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  async function getAllProducts() {
    try {
      const res = await api.get("/product/getAll", { withCredentials: true });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserInfo() {
    try {
      const info = await api.get("/user/getInfo", { withCredentials: true });
      setUser(info.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    try {
      await api.post("/user/logout", {}, { withCredentials: true });
      dispatch(turnAuthTrueFailure());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserInfo();
    getAllProducts();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <h2>Olá {user.username ?? user.username}</h2>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        {data.length !== 0 && (
          <Products data={data} setData={setData} getAllProducts={getAllProducts} />
        )}
        <AddProduct getAllProducts={getAllProducts} />
      </Content>
    </Container>
  );
}
