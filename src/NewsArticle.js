export default function NewsArticle(props) {
  console.log(props);
  return (
    <div className="col-sm-4">
      {/* <p>Hello</p> */}
      <h3>Product Name: {props.productName}</h3>
      <img
        alt={props.productName}
        src={props.productImage}
        class="img-fluid mx-auto d-block"
        width="200"
        height="200"
      />
      <h3>Product Description:</h3>
      <p>{props.productDesc}</p>

      <p class="text-end">${props.productPrice}</p>

      <a href="#" className="btn btn-info" target="_blank">
        Add to Cart
      </a>
    </div>
  );
}
