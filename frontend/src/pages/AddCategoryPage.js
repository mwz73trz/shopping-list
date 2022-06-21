import { useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function AddCategoryPage(props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const categroyData = {
      name: evt.target.elements["name"].value,
      items: [],
    };

    const data = await listAPI.addCategory(categroyData);
    console.log(data);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Add Category Page</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <label>Category Name: </label>
        <input name="name" placeholder="Category Name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCategoryPage;
