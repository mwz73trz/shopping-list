import { Link } from "react-router-dom";

function AllCategories(props) {
  return (
    <div>
      <h3>
        <Link to={`categories/${props.category.id}`}>
          {props.category.name}
        </Link>
      </h3>
      <Link to={`categories/${props.category.id}/update`}>Update Category</Link>
      <br />
      <Link to={`categories/${props.category.id}/delete`}>Delete Category</Link>
    </div>
  );
}

export default AllCategories;
