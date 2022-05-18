import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { api } from "../../services/api";
import UpdateProduct from "../UpdateProduct";
import {
  sortByExpirationDate,
  sortByName,
  sortByOriginDate,
  sortByPerishable,
  sortByPrice,
} from "./sortProducts";
import { Table } from "./style";

export default function Products({ data, setData, getAllProducts, index }) {
  const [display, setDisplay] = useState("");

  function convertToBrazilianDate(date) {
    return date.split("T")[0].split("-").reverse().join("/");
  }
  async function removeProduct(id) {
    try {
      const ave = await api.delete("/product/delete", { withCredentials: true, data: { id: id } });
      console.log(ave);
      console.log(id);
      getAllProducts();
    } catch (error) {
      console.log(error);
    }
  }

  function showUpdateProduct(id) {
    if (display === id) {
      setDisplay("");
    } else {
      setDisplay(id);
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <button onClick={() => sortByName(data, setData)}>Produto</button>
          </th>
          <th>
            <button onClick={() => sortByPrice(data, setData)}>Preço</button>
          </th>
          <th>
            <button onClick={() => sortByOriginDate(data, setData)}>Data de fabricação</button>
          </th>
          <th>
            <button onClick={() => sortByPerishable(data, setData)}>Produto perecível</button>
          </th>
          <th>
            <button onClick={() => sortByExpirationDate(data, setData)}>Data de validade</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (product) =>
            data.indexOf(product) < index * 10 &&
            data.indexOf(product) >= index * 10 - 10 && (
              <tr key={product._id}>
                <td>{product.productName}</td>
                <td>
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{convertToBrazilianDate(product.originDate)}</td>
                {product.isPerishable ? <td>Sim</td> : <td>Não</td>}
                {product.isPerishable ? (
                  <td>{convertToBrazilianDate(product.expirationDate)}</td>
                ) : (
                  <td></td>
                )}
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      showUpdateProduct(product._id);
                    }}
                  >
                    <FaRegEdit size="15px" />
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => removeProduct(product._id)}>
                    <ImBin size="15px" />
                  </button>
                  <UpdateProduct
                    getAllProducts={getAllProducts}
                    display={display === product._id ? "flex" : "none"}
                    setDisplay={setDisplay}
                    product={product}
                    productId={product._id}
                  />
                </td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}
