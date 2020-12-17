import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setLastName,
  setFirstName,
  setEmail,
  setPassword,
  confirmPassord,
  registerUser,
  signInUser,
} from "../store/actions/LoginActions";
import { useEffect } from "react";

const stateToProps = (state) => {
  return {
    loginState: state.loginState,
  };
};

const actionsToProps = (dispatch) => {
  return {
    setLastName: (data) => dispatch(setLastName(data)),
    setFirstName: (data) => dispatch(setFirstName(data)),
    setEmail: (data) => dispatch(setEmail(data)),
    setPassword: (data) => dispatch(setPassword(data)),
    confirmPassord: (data) => dispatch(confirmPassord(data)),
    registerUser: (data) => dispatch(registerUser(data)),
    signInUser: (data) => dispatch(signInUser(data)),
  };
};

const Signup = (props) => {
  let formError = false;
  let notEqual = false;
  let unique = false;

  useEffect(() => {}, [formError]);
  const {
    loginState,
    setLastName,
    setFirstName,
    setEmail,
    setPassword,
    confirmPassord,
    registerUser,
    signInUser,
  } = props;

  const handleChange = ({ target }) => {
    switch (target.name) {
      case "last":
        return setLastName(target.value);
      case "first":
        return setFirstName(target.value);
      case "email":
        return setEmail(target.value);
      case "password":
        return setPassword(target.value);
      case "confirm":
        return confirmPassord(target.value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginState.password === loginState.confirmPassord) {
      if (loginState.lastName && loginState.firstName && loginState.email) {
        try {
          registerUser(loginState);
          const userData = signInUser(loginState);
          // console.log(userData);
          props.history.push("/diary");
        } catch (error) {
          unique = true;
        }
      } else {
        formError = true;
        // console.log(formError);
      }
    } else {
      notEqual = true;
    }
  };
  console.log(formError);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <TextInput
          placeholder="LAST NAME"
          title="LAST NAME"
          name="last"
          type="text"
          onChange={handleChange}
        />
        <TextInput
          placeholder="FIRST NAME"
          title="FIRST NAME"
          name="first"
          type="text"
          onChange={handleChange}
        />
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
        <TextInput
          placeholder="CONFIRM PASSWORD"
          title="CONFIRM PASSWORD"
          name="confirm"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
        {formError ? <p>Please fill in all fields</p> : null}
        {unique ? <p>Email and or User Name already exists</p> : null}
        {notEqual ? <p>Passwords do no match</p> : null}
        <p>
          Already have an account? Please visit our{" "}
          {
            <Link to="/login">
              <strong>Login</strong>
            </Link>
          }{" "}
          page!{" "}
        </p>
      </form>
    </section>
  );
};

export default connect(stateToProps, actionsToProps)(Signup);
