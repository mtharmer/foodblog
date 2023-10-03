import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector(state => state.auth.user);
  return (
    <div className="container">
      <h3>Email: {user.email}</h3>
      {/* TODO: Password reset functionality */}
    </div>
  );
}
