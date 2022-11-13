import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Spinner, Table } from "reactstrap";
import { useGetData } from "../hook";

//  B1: Khai báo handleSubmit => thực hiện logic khi user gửi 1 y/c tìm kiếm
//  B2: Xác định giá trị người dùng nhập vào ô tìm kiếm => handleSearch()
// + Khai báo state để lưu giá trị nhập vào ô tìm kiếm
// + Khái báo state để lưu giá trị gọi api Post

const Search = () => {
  const [textSearch, setTextSearch] = useState("");
  const [dataPost, setDataPost] = useState("");

  const handleSearch = (event) => {
    //thực hiện logic khi user nhập vào ô tìm kiếm
    setTextSearch(event.target.value);
  };

  const { isLoading, isError, error, data } = useGetData();
  console.log(data);
  console.log(isLoading, "isLoading");
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:3004/posts?q=${textSearch}`,
      }).then(function (response) {
        setDataPost(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [textSearch]);
  if (isLoading)
    return (
      <p>
        <Spinner />
      </p>
    );

  return (
    <div className="container mt-4">
      <h1>Tìm kiếm</h1>
      <Form>
        <FormGroup>
          <Input
            name="search"
            placeholder="Nhập nội dung bạn muốn tìm kiếm tại đây ..."
            type="text"
            onChange={handleSearch}
          />
        </FormGroup>{" "}
      </Form>
      <h2 className="mt-5">Gợi ý từ khóa tìm kiếm</h2>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {(!dataPost || dataPost.length == 0) && (
            <tr>
              <td colSpan={3}>Người dùng chưa nhập vào input</td>
            </tr>
          )}
          {dataPost &&
            dataPost.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Search;
