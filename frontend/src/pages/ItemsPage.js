import { useEffect, useState } from "react";
import listAPI from "../api/listAPI";
import { useParams, Link } from "react-router-dom";

function ItemsPage(props) {
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    loadCategory();
  }, [params.id]);

  const loadCategory = async () => {
    let data = await listAPI.getCategoryById(params.id);
    setCategory(data);
  };

  useEffect(() => {
    loadItems();
  }, [category]);

  const loadItems = async () => {
    if (!category) setItems([]);

    let newItems = [];
    for (const itemId of category.items) {
      newItems.push(await listAPI.getItemById(itemId));
    }

    setItems(newItems);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <p key={index}>
          <Link
            to={{ pathname: `items/${item.id}`, state: { category: category } }}
          >
            {item.name} || {item.category}
          </Link>
        </p>
      );
    });
  };

  return (
    <div>
      {renderItems()}
      <Link to="items/add">Add New Item</Link>
    </div>
  );
}

export default ItemsPage;
