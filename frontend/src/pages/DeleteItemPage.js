import { useParams, useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function DeleteItemPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const deleteItem = async () => {
    const data = listAPI.deleteItem(params.id);
    if (data) {
      navigate(-2);
    }
  };
  return (
    <div>
      <h1>Delete Item Page</h1>
      <h3>Are you sure you want to delete this item?</h3>
      <br />
      <button onClick={deleteItem}>Yes</button>
      <button>No</button>
    </div>
  );
}

export default DeleteItemPage;
