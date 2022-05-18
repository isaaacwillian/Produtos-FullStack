import { Form } from "@unform/web";
import React, { useRef, useState } from "react";
import { api } from "../../services/api";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { Container } from "./style";

export default function AddProduct({ getAllProducts }) {
  const formRef = useRef(null);

  const [selectTrue, setSelectTrue] = useState(true);
  const [originDate, setOriginDate] = useState("00/00/0000");

  function limitDecimalPlaces(e) {
    if (e.target.value.indexOf(".") == -1) {
      return;
    }
    if (e.target.value.length - e.target.value.indexOf(".") > 2) {
      e.target.value = parseFloat(e.target.value).toFixed(2);
    }
  }

  async function handleAddProduct(data) {
    if (data.isPerishable === "true") {
      data.isPerishable = true;
    } else {
      data.isPerishable = false;
      delete data.expirationDate;
    }
    console.log(data);
    try {
      await api.post("/product/insert", data, { withCredentials: true });
      getAllProducts();
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelect(e) {
    const isTrue = e.target.value === "true";
    setSelectTrue(isTrue);
  }

  function handleDate(e) {
    setOriginDate(e.target.value);
  }
  return (
    <Container>
      <h3>Adicionar produto</h3>
      <div>
        <p>Produto</p>
        <p>Preço</p>
        <p>Data de fabricação</p>
        <p>Produto Perecível</p>
        <p>Data de validade</p>
      </div>
      <Form ref={formRef} onSubmit={handleAddProduct}>
        <div>
          <Input name="productName" placeholder="Nome do produto" type="text" dashboard required />
          <Input
            name="price"
            placeholder="R$ 0,00"
            type="float"
            onInput={limitDecimalPlaces}
            dashboard
            required
          />
          <Input
            name="originDate"
            placeholder="Data de origem"
            type="date"
            onChange={handleDate}
            dashboard
            required
          />
          <Select name="isPerishable" defaultValue={true} onChange={handleSelect}>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Select>
          <Input
            name="expirationDate"
            min={originDate}
            placeholder="Data de expiração"
            type="date"
            dashboard
            disabled={!selectTrue}
            required={selectTrue}
          />
        </div>
        <Button type="submit">Adicionar Produto</Button>
      </Form>
    </Container>
  );
}
