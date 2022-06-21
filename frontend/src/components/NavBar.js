import { Link, useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function NavBar(props) {
  const navigate = useNavigate();
  const doLogout = async () => {
    const data = await listAPI.logout();
    if (data) {
      props.setUsername("");
      navigate("/");
    }
  };

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <>
          &nbsp; |&nbsp;
          <Link to="/login">Login</Link>
          &nbsp; |&nbsp;
          <Link to="/signup">Sign Up</Link>
        </>
      );
    }

    return (
      <>
        &nbsp; |&nbsp;
        <Link to="#" onClick={doLogout}>
          Logout
        </Link>
      </>
    );
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        {renderAuthItems()}
      </div>
    </div>
  );
}

export default NavBar;
