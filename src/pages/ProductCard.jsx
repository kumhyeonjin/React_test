import { Link } from "react-router-dom";
function ProductCard(props) {
  return (
    <li className="list">
      <img src={`/img/${props.item.img}`} />
      <span className="sc_title">{props.item.title}</span>
      <span className="sc_price">{props.item.price}원</span>
    </li>
  );
}
export default ProductCard;
