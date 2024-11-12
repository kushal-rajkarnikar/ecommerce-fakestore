export default function Product(props) {
  console.log(props);
  return (
    <div className="col-sm-4">
      <div className="card p-4 h-100">
        <h3>{props.productName}</h3>
        <img src={props.productImg} width="100%" className="product-img" />$
        {props.productPrice}
      </div>
    </div>
  );
}
