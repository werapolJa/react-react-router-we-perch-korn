import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductForm() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: ""
  });
  const { productId } = useParams()
  const navigate = useNavigate()

  const fetchData = async () => {
    try{
      const response = await axios.get(`http://localhost:4001/products/${productId}`, product)
      setProduct(response.data.data)
      console.log(response.data.data)
    }catch(error){
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const updateDataProduct = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.put(`http://localhost:4001/products/${productId}`, product)
      navigate(`/${productId}`)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[productId])

  return (
    <form className="product-form" onSubmit={updateDataProduct}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            placeholder="Enter name here"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={product.image}
            placeholder="Enter image url here"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={product.price}
            placeholder="Enter price here"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={product.description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
