import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }

  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <button onClick={goHomePage}>Back to Home</button>
    </div>
  );
}

export default CreateProductPage;
