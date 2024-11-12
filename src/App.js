import "./App.css";
import NewsBlock from "./NewsBlock";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Product from "./Product";

export default function App() {
  const [Products, setProducts] = React.useState([]);

  React.useEffect(function () {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const NewsList = Products.map(function (item) {
    return (
      <Product
        productPrice={item.price}
        productName={item.title}
        productImg={item.image}
      />
    );
  });

  return (
    <div className="container">
      <div className="row gy-5">{NewsList}</div>
    </div>
  );
}
