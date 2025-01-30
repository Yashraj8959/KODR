import React, { useState } from "react";

const FormValidate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const buttonSubmithandlers = () => {
    const { name, email, password, confirmPassword } = formData;
    if (name && email && password && confirmPassword === password) {
      alert("Registered successfully");
    } else {
      alert("Please fill all the fields and ensure passwords match");
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f2f2f2",
        }}
        onSubmit={submitHandler}
      >
        <label>
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={inputHandler}
          type="text"
          required
        />
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={inputHandler}
          type="email"
        />
        <label>
          Password <span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="password"
          value={formData.password}
          onChange={inputHandler}
          type="password"
          required
        />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={inputHandler}
          type="password"
        />
        <button type="button" onClick={buttonSubmithandlers}>
          Button
        </button>
      </form>
    </div>
  );
};

export default FormValidate;