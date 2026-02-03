import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import SocialLoginButtons from "./SocialLoginButtons";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().required("Password required"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Replace with your backend login API
      const res = await axios.post("https://reqres.in/api/login", data);
      login({ email: data.email, token: res.data.token });
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: " + err.response.data.error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>

      <SocialLoginButtons />
    </div>
  );
}
