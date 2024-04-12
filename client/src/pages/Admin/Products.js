import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { message } from "antd";
import Card from "../../components/utils/Card";
import CustomCard from "../../components/utils/Card";

function Products() {
  const [products, setProducts] = useState([]);

  //Function to get products
  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/product/`);
      if (data.status) {
        setProducts(data.product);
      } else {
        message.error(data.message);
      }
    } catch (err) {
      console.log(err);
      message.error("Error While fetch product");
    }
  };
  useEffect(() => {
    getProducts();
  }, [products]);
  console.log(products)
  return (
    <>
      <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1 className="text-center">All Products List</h1>
              <div className="d-flex m-2">
            {products.map((product, index) => (
                <CustomCard
                  key={product._id}
                  src={`${process.env.REACT_APP_API}/product/image/${product._id}`}
                  name={product.title}
                  description={product.description.substring(0, 50)}
                  price={product.price}
                  link={`/dashboard/admin/product/${product.slug}`}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Products;
