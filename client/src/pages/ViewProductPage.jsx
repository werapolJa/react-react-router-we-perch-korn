import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ViewProductPage() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()
  const { productId } = useParams()

  const fetchData = async () => {
    try{
      const response = await axios.get(`http://localhost:4001/products/${productId}`)
      setProduct(response.data.data)
      // console.log(response.data.data)
    }catch(error){
      console.log(error)
    }
  }

  const goHomePage = () => {
    navigate("/")
  }

  useEffect(()=>{
    fetchData()
  },[productId])

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h1>Name : {product.name}</h1>
        <img src={product.image}/>
        <h2>{product.price} THB</h2>
        <p>{product.description}</p>
      </div>
      <button onClick={goHomePage}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
