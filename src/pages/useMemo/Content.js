import React, { useMemo, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

const Content = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSumit = (event) => {
    event.preventDefault();
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
  };

  //   const total = products.reduce((result, prod) => {
  //     console.log("tinh toan lai");
  //     return result + prod.price;
  //   }, 0);
  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log("tinh toan lai");
      return result + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="container mt-5">
      <h1 className="my-3">Quản lý sản phẩm</h1>
      <Form onSubmit={handleSumit}>
        <FormGroup floating>
          <Input
            name="ten_sp"
            placeholder="Nhập tên sản phẩm"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Label for="exampleEmail">Tên sản phẩm</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            name="gia_sp"
            placeholder="Nhập giá sản phẩm"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label for="examplePassword">Giá Sản phẩm</Label>
        </FormGroup>{" "}
        <Button color="danger">Thêm Sản phẩm</Button>
      </Form>

      <h1 className="mt-5">Danh sách sản phẩm</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Giá sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {products.length <= 0 && (
            <tr>
              <th colSpan={3}>Chưa có sản phẩm trong danh sách</th>
            </tr>
          )}
          {products.length > 0 &&
            products.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <h2 className="mt-3">Tổng giá sản phẩm: {total}</h2>
    </div>
  );
};

export default Content;

// useMemo ((fn),[deps])
