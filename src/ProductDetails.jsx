import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-5">
          <img src={product.image} className="img-fluid" />
        </div>

        <div className="col-md-7">
          <h2>{product.title}</h2>
          <h4 className="text-success">₹ {product.price}</h4>
          <p className="mt-3">{product.description}</p>

          <button
            className="btn btn-warning mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}





