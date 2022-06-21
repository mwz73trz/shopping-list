import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllCategories from "../components/AllCategories";
import listAPI from "../api/listAPI";

function HomePage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadAllCategories();
  }, [props.username]);

  const loadAllCategories = async () => {
    const data = await listAPI.getAllCategories();
    setCategories(data ? data : []);
  };

  const renderAllCategories = () => {
    return categories.map((category, index) => {
      return <AllCategories key={index} category={category} />;
    });
  };
  return (
    <div>
      <h1>Home Page</h1>
      {renderAllCategories()}
      <br />
      <Link to="categories/add">Add New Category</Link>
    </div>
  );
}

export default HomePage;
