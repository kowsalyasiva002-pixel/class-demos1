import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import SocialLoginButtons from "./SocialLoginButtons";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm password is required"),
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // Replace with your backend API
      const res = await axios.post("https://reqres.in/api/register", {
        email: data.email,
        password: data.password,
      });
      alert("Registration Successful: " + JSON.stringify(res.data));
    } catch (err) {
      alert("Error: " + err.response.data.error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" {...register("name")} />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" {...register("email")} />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" {...register("password")} />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" className="form-control" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>

      <SocialLoginButtons />
    </div>
  );
}

   