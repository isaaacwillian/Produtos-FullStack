import { Form } from "@unform/web";
import React, { useRef, useState } from "react";
import { api } from "../../services/api";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { Container } from "./style";

export default function updateProduct({ getAllProducts, display, setDisplay, product, productId }) {
  const formRef = useRef(null);

  const [selectTrue, setSelectTrue] = useState(product.isPerishable);
  const [originDate, setOriginDate] = useState(convertToBrazilianDate(product.originDate));

  function limitDecimalPlaces(e) {
    if (e.target.value.indexOf(".") == -1) {
      return;
    }
    if (e.target.value.length - e.target.value.indexOf(".") > 2) {
      e.target.value = parseFloat(e.target.value).toFixed(2);
    }
  }

  function convertToBrazilianDate(date) {
    return date.split("T")[0];
  }

  async function handleUpdateProduct(data) {
    data.id = productId;

    if (data.isPerishable === "true") {
      data.isPerishable = true;
    } else {
      data.isPerishable = false;
      delete data.expirationDate;
    }
    console.log(data);
    try {
      await api.put("/product/update", data, { withCredentials: true });
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
    <Container display={display}>
      <h3>Atualizar produto</h3>
      <div>
        <p>Produto</p>
        <p>Preço</p>
        <p>Data de fabricação</p>
        <p>Produto Perecível</p>
        <p>Data de validade</p>
      </div>
      <Form ref={formRef} onSubmit={handleUpdateProduct}>
        <div>
          <Input
            name="productName"
            placeholder="Nome do produto"
            type="text"
            defaultValue={product.productName}
            dashboard
            required
          />
          <Input
            name="price"
            placeholder="R$ 0,00"
            type="float"
            onInput={limitDecimalPlaces}
            defaultValue={product.price}
            dashboard
            required
          />
          <Input
            name="originDate"
            placeholder="Data de origem"
            type="date"
            onChange={handleDate}
            defaultValue={convertToBrazilianDate(product.originDate)}
            dashboard
            required
          />
          <Select name="isPerishable" defaultValue={product.isPerishable} onChange={handleSelect}>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Select>
          <Input
            name="expirationDate"
            min={originDate}
            placeholder="Data de expiração"
            type="date"
            dashboard
            defaultValue={product.isPerishable && convertToBrazilianDate(product.expirationDate)}
            disabled={!selectTrue}
            required={selectTrue}
          />
        </div>
        <Button type="submit">Atualizar Produto</Button>
      </Form>
      <button
        id="close"
        onClick={() => {
          setDisplay("");
        }}
      >
        X
      </button>
    </Container>
  );
}
