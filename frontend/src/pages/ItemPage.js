import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import listAPI from "../api/listAPI";

function ItemPage(props) {
  const params = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    loadItem();
  }, [params.id]);

  const loadItem = async () => {
    const data = await listAPI.getItemById(params.id);
    setItem(data);
  };

  const renderItem = () => {
    if (!item) {
      return null;
    }

    return (
      <div>
        <p>Item Name: {item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <br />
        <Link to={`/items/${item.id}/update`}>Update Item</Link>
        <br />
        <Link to={`/items/${item.id}/delete`}>Delete Item</Link>
      </div>
    );
  };
  return (
    <div>
      <h1>Item Page</h1>
      {renderItem()}
    </div>
  );
}

export default ItemPage;
