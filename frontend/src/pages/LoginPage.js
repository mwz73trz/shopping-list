import { useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function LoginPage(props) {
  const navigate = useNavigate();
  const handleLogin = async (evt) => {
    evt.preventDefault();

    const loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await listAPI.login(loginData);
    if (data) {
      props.setUsername(data.username);
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleLogin} method="POST">
      <h1>Login Page</h1>
      <label>Username: </label>
      <input name="username" type="text" placeholder="Username" />
      <label>Password: </label>
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginPage;
