import { useParams, useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function DeleteCategoryPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const deleteCategory = async () => {
    const data = await listAPI.deleteCategory(params.id);
    if (data) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Delete Category Page</h1>
      <br />
      <h4>Are you sure you want to delete this category?</h4>
      <br />
      <button onClick={deleteCategory}>Yes</button>
      <button>No</button>
    </div>
  );
}

export default DeleteCategoryPage;
