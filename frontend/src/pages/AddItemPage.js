import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import listAPI from "../api/listAPI";

function AddItemPage(props) {
  const [category, setCategory] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  useEffect(() => {
    loadCategory();
  }, [params.id]);

  const loadCategory = async () => {
    const data = await listAPI.getCategoryById(params.id);
    setCategory(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const itemData = {
      name: evt.target.elements["name"].value,
      quantity: evt.target.elements["quantity"].value,
      category: category.id,
    };

    const data = await listAPI.addItem(itemData);
    if (data) {
      navigate(`/categories/${category.id}/`);
    }
  };

  return (
    <div>
      <h1>Add Item Page</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <label>Item Name: </label>
        <input name="name" placeholder="Item Name" />
        <br />
        <label>Quantity: </label>
        <input name="quantity" placeholder="Quantity" />
        <br />
        <button type="submit">Add New Item</button>
      </form>
    </div>
  );
}

export default AddItemPage;
