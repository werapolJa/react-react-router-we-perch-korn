import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <button onClick={goHomePage}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
