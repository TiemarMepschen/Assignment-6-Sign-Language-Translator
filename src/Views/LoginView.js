import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAttemptAction } from "../Store/actions/loginActions";
import LoginHeader from "../Header/LoginHeader.js";

function LoginView() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.sessionReducer);
  const { loginError, loginAttempting } = useSelector(state => state.loginReducer)


  const [credentials, setCredentials] = useState({
    username: "",
  });

  const onInputChange = (event) => {
    setCredentials({
      // takes the credentials state and adds it to a new object
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    // make sure page doesn't reload
    event.preventDefault();
    if (credentials.username.length > 0) {
      // attempt to login
      dispatch(loginAttemptAction(credentials.username));
    }
  };

  return (
    <>
      <header>
        <LoginHeader/>
      </header>
      {loggedIn && <Navigate to="/translation" />}
      {!loggedIn && (
        <div className="container">
          <div className="text-right">
            <h1 className="translation-title">Lost in Translation</h1>
            <p>Get Started</p>
          </div>
          <form
            className="mt-3 d-flex justify-content-center align-items-center text-start"
            onSubmit={onFormSubmit}
          >
            <div className="mb-3">
              <input
                id="username"
                type="text"
                placeholder="What's your name?"
                className="form-control mt-3"
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            {loginAttempting && <p>Trying to login...</p>}
            {loginError && (
              <div className="alert alert-danger" role="alert">
                <h4>Unsuccessful</h4>
                <p>{loginError}</p>
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default LoginView;
