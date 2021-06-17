import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  let history = useHistory();
  const [person, setPerson] = useState({ email: "", password: "" });
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = person;
    if (email.trim() && password.trim()) {
      axios
        .post("http://localhost:8080/login/", { email, password })
        .then((res) => {
          if (res.status < 200 || res.status > 299) {
            !isSuccess && setIsSuccess(false);
          } else {
            history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err.message);
          setIsSuccess(false);
        });
    } else {
      setIsSuccess(false);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((person) => {
      return { ...person, [name]: value };
    });
  };

  return (
    <>
      <article className="sign-in">
        <form className="form">
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>
          {!isSuccess && (
            <span className="signup__message-error">
              Incorrect email or password
            </span>
          )}
          <div>
            Create an account ?{" "}
            <Link to="/sign-up">
              <button>Sign Up</button>
            </Link>
          </div>
        </form>

        {/* {people.map((person) => {
          const { id,  il, password } = person;
          return (
            <div className="item" key={id}>
              <h4>{<>
              <p>{password}</p>
              <p>{email}</p>
            </div>
          );
        })} */}
      </article>
    </>
  );
};

export default SignIn;
