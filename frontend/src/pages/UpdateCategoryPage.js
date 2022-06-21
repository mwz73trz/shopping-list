import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function UpdateCategoryPage(props) {
  const [category, setCategory] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadCategory();
  }, [params.id]);

  const loadCategory = async () => {
    const data = await listAPI.getCategoryById(params.id);
    setCategory(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const updatedCategory = {
      name: evt.target[0].value,
      items: category.items,
    };

    const dataUpdated = await listAPI.updateCategory(
      params.id,
      updatedCategory
    );
    setCategory(dataUpdated);
    navigate(-1);
  };

  const renderCategory = () => {
    if (!category) {
      return null;
    }

    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>Name: </label>
          <input type="text" defaultValue={category.name} />
          <br />
          <button type="submit">Update Category</button>
        </form>
      </div>
    );
  };
  return (
    <div>
      <h1>Update Category Page</h1>
      {renderCategory()}
    </div>
  );
}

export default UpdateCategoryPage;
