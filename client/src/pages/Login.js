import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import {
  setEmail,
  setPassword,
  signInUser,
} from "../store/actions/LoginActions";

const stateToProps = (state) => {
  return {
    loginState: state.loginState,
  };
};

const actionsToProps = (dispatch) => {
  return {
    setEmail: (data) => dispatch(setEmail(data)),
    setPassword: (data) => dispatch(setPassword(data)),
    signInUser: (data) => dispatch(signInUser(data)),
  };
};

const Login = (props) => {
  const { loginState, setEmail, setPassword, signInUser } = props;
  // console.log(loginState);
  let formError = false;

  const handleChange = ({ target }) => {
    if (target.name === "email") {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
    // console.log(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        email: loginState.email,
        password: loginState.password,
      };
      const userData = signInUser(data);
      props.history.push("/diary");
      // console.log(data);
      // console.log(userData);
    } catch (error) {
      formError = true;
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <TextInput
          placeholder="EMAIL"
          title="EMAIL"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <TextInput
          placeholder="PASSWORD"
          title="PASSWORD"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {formError ? <p>Please enter a registered Email and Password</p> : null}
        <p>
          New to My Calorie Pal V2? Please visit our{" "}
          {
            <Link to="/signup">
              <strong>Sign Up</strong>
            </Link>
          }{" "}
          page!{" "}
        </p>
      </form>
    </section>
  );
};
export default connect(stateToProps, actionsToProps)(Login);
