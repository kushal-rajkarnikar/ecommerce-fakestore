import "./App.css";
import NewsBlock from "./NewsBlock";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import NewsArticle from "./NewsArticle";

export default function App() {
  const [Products, setProducts] = React.useState([]);

  React.useEffect(function () {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const NewsList = Products.map(function (item) {
    return (
      <NewsArticle
        productImage={item.image}
        productDesc={item.description}
        productPrice={item.price}
        productName={item.title}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <h1 class="text-center">Taazaa Store</h1> */}
        </div>
      </div>
      <div className="row">{NewsList}</div>
    </div>
  );
}
