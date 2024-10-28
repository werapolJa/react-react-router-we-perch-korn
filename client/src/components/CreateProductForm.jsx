import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [dataPost, setDataPost] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setDataPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewPost = async (e) => {
    e.preventDefault();
    console.log(dataPost);
    try{
      const response = await axios.post("http://localhost:4001/products", dataPost)
      setDataPost({
        name: "",
        price: "",
        image: "",
        description: "",
      }); 
    } catch (error) {
      console.error(error);
    }
    navigate("/")
  };


  return (
    <form className="product-form" onSubmit={addNewPost}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
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
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;

