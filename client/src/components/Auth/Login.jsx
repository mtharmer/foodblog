import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from 'reducers/authSlice';

export default function Login() {
  const [user, setUser] = useState({email: "", password: ""});
  const dispatch = useDispatch();

  function inputChanged(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser({...user, [name]: value});
  }

  function clickSubmit(event) {
    event.preventDefault();
    dispatch(login(user));
  }

  return (
    <div className="container">
      <form>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" onChange={inputChanged}/>
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={inputChanged}/>
        </div>
        <button className="btn btn-primary" onClick={clickSubmit}>Log In</button>
      </form>
    </div>
  );
}
