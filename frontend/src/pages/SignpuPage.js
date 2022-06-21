import { useNavigate } from "react-router-dom";
import listAPI from "../api/listAPI";

function SignupPage(props) {
  const navigate = useNavigate();
  const handleSignup = async (evt) => {
    evt.preventDefault();

    const signupData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await listAPI.signup(signupData);
    if (data) {
      navigate("/login");
    }
  };
  return (
    <form onSubmit={handleSignup} method="POST">
      <h1>Login Page</h1>
      <label>Username: </label>
      <input name="username" type="text" placeholder="Username" />
      <label>Password: </label>
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupPage;
