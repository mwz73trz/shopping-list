import { Link } from "react-router-dom";

function CheckLoginPage(props) {
  if (props.username === "") {
    return (
      <div>
        <p>
          You are not logged in, either <Link to="/login">login</Link> or{" "}
          <Link to="/signup">signup</Link> to enter your shopping list.
        </p>
      </div>
    );
  }

  return <div>{props.actualPage()}</div>;
}

export default CheckLoginPage;
