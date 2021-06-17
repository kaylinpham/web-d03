import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import axios from "axios";

const SignUp = () => {
  let history = useHistory();
  const [person, setPerson] = useState({
    email: "",
    password: "",
    // fullname: "",
  });
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = person;
    if (email.trim() && password.trim()) {
      const newPerson = { ...person };
      axios
        .post("http://localhost:8080/users/", { email, password })
        .then(() => {
          history.push("/sign-in");
          // !isSuccess && setIsSuccess(true);
          // setPerson({ email: "", password: "" });
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
      <article className="sign-up">
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
          {/* <div className="form-control">
            <label htmlFor="fullname">Full name : </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={person.fullname}
              onChange={handleChange}
            />
          </div> */}
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          {!isSuccess && (
            <span className="signup__message-error">
              Invalid email or password
            </span>
          )}

          <div>
            Create an account ?{" "}
            <Link to="/sign-in">
              <button>Log In</button>
            </Link>
          </div>
        </form>
      </article>
    </>
  );
};

export default SignUp;
