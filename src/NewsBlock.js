export default function NewsBlock(props) {
  return (
    <div className="col-sm-4">
      <h3>{props.title}</h3>
      <img src={props.newsImage} alt={props.title} className="img-fluid" />
      <p>{props.newsDesc}</p>

      <a href={props.newsLink} class="btn btn-primary" target="_blank">
        Read More
      </a>
    </div>
  );
}
