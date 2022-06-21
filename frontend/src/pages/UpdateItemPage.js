import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function UpdateItemPage(props) {
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    loadItem();
  }, [params.id]);

  const loadItem = async () => {
    const data = await listAPI.getItemById(params.id);
    setItem(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const itemData = {
      name: evt.target[0].value,
      quantity: evt.target[1].value,
      purchased: evt.target[2].value,
      category: item.category,
    };

    const dataUpdated = await listAPI.updateItem(params.id, itemData);
    setItem(dataUpdated);
    navigate(-1);
  };

  const renderItem = () => {
    if (!item) {
      return null;
    }

    return (
      <div>
        <form onSubmit={handleFormSubmit} method="PUT">
          <label>Name: </label>
          <input defaultValue={item.name} type="text" />
          <br />
          <label>Quantity: </label>
          <input defaultValue={item.quantity} type="text" />
          <br />
          <label>Purchased: </label>
          <input type="text" defaultValue={item.purchased} />
          <br />
          <button type="submit">Update Item</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <h1>Update Item Page</h1>
      {renderItem()}
    </div>
  );
}

export default UpdateItemPage;
