import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = products
    .filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item =>
      category === "all" ? true : item.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Products</h2>

      {/* Search / Filter / Sort */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Form.Select onChange={e => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="women's clothing">Women Clothing</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Select onChange={e => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Product Cards */}
      <Row>
        {filtered.map(product => (
          <Col key={product.id} md={3} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Card.Img
                variant="top"
                src={product.image}
                height="200"
                style={{ objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>{product.title.substring(0, 25)}...</Card.Title>
                <Card.Text className="text-danger fw-bold">
                  ₹ {product.price}
                </Card.Text>

                <Button
                  variant="primary"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}







