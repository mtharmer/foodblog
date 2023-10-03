import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "reducers/authSlice";

export default function Signup() {
  const [user, setUser] = useState({email: "", password: "", password_confirmation: ""});
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  function inputChanged(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser({...user, [name]: value});
  }

  async function clickSubmit(event) {
    event.preventDefault();
    dispatch(signup(user));
    setSuccess(true);
  }

  const successfulSignup = (
    <div>
      <h1>Success!</h1>
      <p>Head over to the <Link to="/login">login</Link> page to sign in!</p>
    </div>
  );

  const showForm = (
    <form>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" onChange={inputChanged}/>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" onChange={inputChanged}/>
      </div>
      <div className="mb-2">
        <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" name="password_confirmation" onChange={inputChanged}/>
      </div>
      <button className="btn btn-primary" onClick={clickSubmit}>Sign Up</button>
    </form>
  );

  return (
    <div className="container">
      {(success) ? successfulSignup : showForm}
    </div>
  );
}
